"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const role_entity_1 = require("./role/entities/role.entity");
const user_entity_1 = require("./user/entities/user.entity");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('School X - OpenAPI 3.0')
        .setDescription(`[The source API definition (json)](http://${process.env.SERVER}:${process.env.PORT}/api-json)`)
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = parseInt(process.env.PORT);
    const server = process.env.SERVER;
    init(app);
    await app.listen(port, server);
    console.log(`Application is running on: ${await app.getUrl()}`);
}
async function init(app) {
    const rolesRepository = app.get((0, typeorm_1.getRepositoryToken)(role_entity_1.Role));
    const existingRoles = await rolesRepository.find();
    if (existingRoles.length === 0) {
        const adminRole = new role_entity_1.Role();
        adminRole.value = 'admin';
        const roleadmin = await rolesRepository.save(adminRole);
        const userRole = new role_entity_1.Role();
        userRole.value = 'user';
        await rolesRepository.save(userRole);
        const userRepository = app.get((0, typeorm_1.getRepositoryToken)(user_entity_1.UserEnitity));
        const adminEntity = new user_entity_1.UserEnitity();
        adminEntity.email = process.env.EMAIL_ADMIN;
        const hashedPassword = await bcrypt.hash(process.env.PASSWORD_ADMIN, Number(process.env.HASH_SALT_ROUNDS));
        adminEntity.password = hashedPassword;
        adminEntity.role = roleadmin;
        await userRepository.save(adminEntity);
        console.log('Admin has been created.');
    }
}
bootstrap();
//# sourceMappingURL=main.js.map
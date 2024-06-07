import {NestFactory} from '@nestjs/core';
import {AppModule} from './AppModule';
import {INestApplication} from '@nestjs/common';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    setupSwagger(app);
    await app.listen(3000);
}

bootstrap();

function setupSwagger(app: INestApplication) {
    const builder = new DocumentBuilder();
    const config = builder
        .setTitle('Nest Todo')
        .setVersion('1.0')
        .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT token',
            in: 'header',
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
}

import { NestFactory } from '@nestjs/core'
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
    SwaggerModule,
    DocumentBuilder
} from '@nestjs/swagger';

import { AppModule } from './app.module';
import { CustomLoggerService } from './common/logger/logger.service'

async function bootstrapSwagger(
    app: NestFastifyApplication,
) {
    const options = new DocumentBuilder().build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api-docs', app, document);
}

async function bootstrap() {

    CustomLoggerService.initWiston();
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule.forRoot(),
        new FastifyAdapter(),
        {
            logger: new CustomLoggerService()
        }
    );
    
    await bootstrapSwagger(app);
    const port = 8080;
    await app.listen(port, '0.0.0.0');
}

bootstrap();

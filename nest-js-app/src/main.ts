import { NestFactory } from '@nestjs/core'
import {
    FastifyAdapter,
    NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

async function bootstrap() {

    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule.forRoot(),
        new FastifyAdapter(),
    );

    const port = 8080;
    await app.listen(port, '0.0.0.0');
}

bootstrap();

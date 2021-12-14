import { DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller'
import { AsynchronousModule } from './api/asynchronous/asynchronous.module';
import { LoggerModule } from './common/logger/logger.module';

export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: AppModule,
            imports: [
                AsynchronousModule,
                LoggerModule
            ],
            controllers: [
                AppController
            ]
        }
    }
}

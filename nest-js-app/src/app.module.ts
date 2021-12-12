import { DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller'
import { AsynchronousModule } from './business/asynchronous/asynchronous.module';

export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: AppModule,
            imports: [
                AsynchronousModule
            ],
            controllers: [
                AppController
            ]
        }
    }
}

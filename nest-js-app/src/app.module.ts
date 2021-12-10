import { DynamicModule } from '@nestjs/common';

import { AppController } from './app.controller'

export class AppModule {
    static forRoot(): DynamicModule {
        return {
            module: AppModule,
            imports: [],
            controllers: [
                AppController
            ]
        }
    }
}

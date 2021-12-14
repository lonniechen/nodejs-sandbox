import { Module } from '@nestjs/common';

import { AsynchronousController } from './asynchronous.controller'
import { AsynchronousService } from './asynchronous.service'
import { LoggerModule } from '../../common/logger/logger.module';

@Module({
    controllers: [
        AsynchronousController
    ],
    providers: [
        AsynchronousService,
    ],
    imports: [
        LoggerModule
    ]
})
export class AsynchronousModule { }
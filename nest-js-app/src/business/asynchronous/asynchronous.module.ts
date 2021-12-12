import { Module } from '@nestjs/common';

import { AsynchronousController } from './asynchronous.controller'
import { AsynchronousService } from './asynchronous.service'

@Module({
    controllers: [
        AsynchronousController
    ],
    providers: [
        AsynchronousService,
    ],
    imports: []
})
export class AsynchronousModule { }
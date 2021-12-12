import {
    Controller,
    Get,
} from '@nestjs/common';

import { AsynchronousService } from './asynchronous.service'

@Controller('/asynchronous')
export class AsynchronousController {
    constructor(
        private readonly asynchronousService: AsynchronousService
    ) { }

    @Get('/ping')
    async ping() {
        console.log(`pong`)
        return `pong`
    }

    @Get('/block-event-loop')
    async blockEventLoop() {
        const result = await this.asynchronousService.blockEventLoop()
        console.log(result)
        return result
    }

}

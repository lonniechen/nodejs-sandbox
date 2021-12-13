import {
    Controller,
    Get,
} from '@nestjs/common';

import { AsynchronousService } from './asynchronous.service'


/**
 * 
 * steps to play with this demo:
 * 1. open one terminal, start the application by running 'npm run dev' in /nest-js-app
 * 2. open one new terminal, run 'while true; do date; curl 127.0.0.1:8080/asynchronous/ping; sleep 1; echo; done;'
 * 3. open one new terminal, run 'curl localhost:8080/asynchronous/block-event-loop'
 * 4. in the 3th terminal, call endpoints of 'async-block-event-loop' and 'block-event-loop-with-breath'
 * 5. check the timestamp of the logs in the first terminal
 * 
 * some readings:
 * 1. https://stackoverflow.com/questions/34855352/how-in-general-does-node-js-handle-10-000-concurrent-requests
 * 2. https://medium.com/dkatalis/eventloop-in-nodejs-ways-to-block-it-and-ways-to-avoid-b60a65bab2be
 */

@Controller('/asynchronous')
export class AsynchronousController {
    constructor(
        private readonly asynchronousService: AsynchronousService
    ) { }
        
    @Get('/ping')
    async ping() {
        const messge = `${new Date().toISOString()}: pong!`
        console.log(messge)
        return messge
    }

    /**
     * 
     * CPU intensive task
     * @returns string
     * 
     */
    @Get('/block-event-loop')
    async blockEventLoop() {
        const result = await this.asynchronousService.blockEventLoop()
        console.log(result)
        return result
    }

    @Get('/async-block-event-loop')
    async asyncBlockEventLoop() {
        const result = await this.asynchronousService.asyncBlockEventLoop()
        console.log(result)
        return result
    }

    // this would take a while, approximately 3 mins
    @Get('/block-event-loop-with-breath')
    async blockEventLoopWithBreath() {
        const result = await this.asynchronousService.blockEventLoopWithBreath()
        console.log(result)
        return result
    }
}

import {
    Controller,
    Get,
    Redirect,
} from '@nestjs/common';
import { CustomLoggerService } from './common/logger/logger.service';

@Controller('')
export class AppController {
    constructor(
        private readonly logger: CustomLoggerService
    ) {
        this.logger.setContext(AppController.name)
    }

    @Get('/test')
    async test() {
        const message = `hello world`
        this.logger.log(message)
        return message
    }

    @Get()
    @Redirect('/api-docs', 302)
    async apiDocs() {
        const message = `API documentation`
        this.logger.log(message)
        return message
    }

}
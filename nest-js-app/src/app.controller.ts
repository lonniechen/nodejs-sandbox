import {
    Controller,
    Get,
} from '@nestjs/common';
import { CustomLoggerService } from './common/logger/logger.service';

@Controller('')
export class AppController {
    constructor(
        private readonly logger: CustomLoggerService
    ) {
        this.logger.setContext(AppController.name)
    }

    @Get('')
    async test() {
        this.logger.log('hello world')
        return 'hello world'
    }

}
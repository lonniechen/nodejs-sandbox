import * as winston from 'winston';
import {
    Injectable,
    LoggerService,
    Scope
} from '@nestjs/common';
import * as clc from 'cli-color';

const yellow = clc.xterm(3);

@Injectable({ scope: Scope.TRANSIENT })
export class CustomLoggerService implements LoggerService {
    private static winston;
    private static lastTimestamp?: number;
    private context: string;

    constructor() {
        CustomLoggerService.initWiston();
    }

    public setContext(cxt: string) {
        this.context = cxt
    }

    public static initWiston() {

        let format;
        const transports = [];

        transports.push(new winston.transports.Console());

        format = winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.colorize({ all: true }),
            winston.format.printf((info) => {
                // console.log(info)
                const meta = info.meta ? info.meta : '';
                const ctx = meta && meta.context ? meta.context : '';
                const trace = meta && meta.trace ? meta.trace : '';

                return (
                    `[${yellow(ctx)}] ${info.timestamp} ${info.level}: ${info.message} ${trace}`
                );
            }),
        );

        CustomLoggerService.winston = winston.createLogger({
            format: format,
            transports: transports,
        });
    }

    error(message: string, trace: string, context?: string) {
        CustomLoggerService.winston.log({
            level: 'error',
            message: message,
            meta: {
                trace: trace,
                context: this.context || context,
            },
        });
    }

    private commonLog(
        message: string,
        context: string,
        severity: string,
        meta: any,
    ) {
        CustomLoggerService.winston.log({
            level: severity,
            message: message,
            meta: Object.assign(
                {
                    context: this.context || context
                },
                meta,
            ),
        });
    }

    log(message: string, context?: string) {
        this.commonLog(message, context, 'info', {});
    }

    warn(message: string, context?: string) {
        this.commonLog(message, context, 'warn', {});
    }

    info(message: string, context?: string) {
        this.commonLog(message, context, 'info', {});
    }

    debug(message: any, context?: string): any {
        this.commonLog(message, context, 'debug', {});
    }

}

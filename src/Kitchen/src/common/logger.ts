import * as LogManager from 'aurelia-logging';
import 'toastr';
import settings from '../settings';


export enum LogLevel {
    Error,
    Warn,
    Info,
    Debug
    
}

export class Logger {

    logger: LogManager.Logger;
    constructor(private loggerName: string) {
        this.logger = LogManager.getLogger(loggerName);
        this.logLevel = settings.logLevel || LogLevel.Error;
    }

    debug(message: string, showToast?: boolean) {
        if(this.logLevel <= LogLevel.Debug) {
            this.logger.debug(message);
            if (showToast) {
                toastr.info(message);
            }
        }
    }

    info(message: string, showToast?: boolean) {
        if(this.logLevel <= LogLevel.Info) {
            this.logger.info(message);
            if (showToast) {
                toastr.info(message);
            }
        }
    }

    warn(message: string, showToast?: boolean) {
        if(this.logLevel <= LogLevel.Warn) {
            this.logger.warn(message);
            if (showToast) {
                toastr.warning(message);
            }
        }
    }

    error(message: string, showToast?: boolean) {
        if(this.logLevel <= LogLevel.Error) {
            this.logger.error(message);
            if (showToast) {
                toastr.error(message);
            }
        }
    }
}

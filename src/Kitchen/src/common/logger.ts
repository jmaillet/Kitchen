import * as LogManager from 'aurelia-logging';
import 'toastr';

export class Logger {

    logger: LogManager.Logger;
    constructor(private loggerName: string) {
        this.logger = LogManager.getLogger(loggerName);
    }

    debug(message: string, showToast?: boolean) {
        this.logger.debug(message);
        if (showToast) {
            toastr.info(message);
        }
    }

    info(message: string, showToast?: boolean) {
        this.logger.info(message);
        if (showToast) {
            toastr.info(message);
        }
    }

    warn(message: string, showToast?: boolean) {
        this.logger.warn(message);
        if (showToast) {
            toastr.warning(message);
        }
    }

    error(message: string, showToast?: boolean) {
        this.logger.error(message);
        if (showToast) {
            toastr.error(message);
        }
    }
}

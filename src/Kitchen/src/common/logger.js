define(["require", "exports", 'aurelia-logging', 'toastr'], function (require, exports, LogManager) {
    var Logger = (function () {
        function Logger(loggerName) {
            this.loggerName = loggerName;
            this.logger = LogManager.getLogger(loggerName);
        }
        Logger.prototype.debug = function (message, showToast) {
            this.logger.debug(message);
            if (showToast) {
                toastr.info(message);
            }
        };
        Logger.prototype.info = function (message, showToast) {
            this.logger.info(message);
            if (showToast) {
                toastr.info(message);
            }
        };
        Logger.prototype.warn = function (message, showToast) {
            this.logger.warn(message);
            if (showToast) {
                toastr.warning(message);
            }
        };
        Logger.prototype.error = function (message, showToast) {
            this.logger.error(message);
            if (showToast) {
                toastr.error(message);
            }
        };
        return Logger;
    })();
    exports.Logger = Logger;
});
//# sourceMappingURL=logger.js.map
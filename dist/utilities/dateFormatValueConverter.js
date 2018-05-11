define(["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DateFormatValueConverter = (function () {
        function DateFormatValueConverter() {
        }
        DateFormatValueConverter.prototype.toView = function (value, format) {
            if (!value)
                return null;
            return moment(value).format(format);
        };
        return DateFormatValueConverter;
    }());
    exports.DateFormatValueConverter = DateFormatValueConverter;
});

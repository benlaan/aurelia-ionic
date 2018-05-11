define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberFormatValueConverter = (function () {
        function NumberFormatValueConverter() {
        }
        NumberFormatValueConverter.prototype.fromView = function (value, format) {
            if (!value)
                return null;
            return parseFloat(value);
        };
        return NumberFormatValueConverter;
    }());
    exports.NumberFormatValueConverter = NumberFormatValueConverter;
});

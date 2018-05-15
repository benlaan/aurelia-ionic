define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisabledAttribute = (function () {
        function DisabledAttribute(element) {
            this.element = element;
        }
        DisabledAttribute.prototype.valueChanged = function (newValue, oldValue) {
            if (!newValue || newValue == false.toString())
                this.element.removeAttribute('disabled');
            else
                this.element.setAttribute('disabled', newValue);
        };
        DisabledAttribute = tslib_1.__decorate([
            aurelia_framework_1.customAttribute('disable'),
            aurelia_framework_1.inject(aurelia_framework_1.DOM.Element),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], DisabledAttribute);
        return DisabledAttribute;
    }());
    exports.DisabledAttribute = DisabledAttribute;
});

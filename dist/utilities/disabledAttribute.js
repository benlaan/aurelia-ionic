var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
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
        DisabledAttribute = __decorate([
            aurelia_framework_1.customAttribute('disable'),
            aurelia_framework_1.inject(aurelia_framework_1.DOM.Element),
            __metadata("design:paramtypes", [Element])
        ], DisabledAttribute);
        return DisabledAttribute;
    }());
    exports.DisabledAttribute = DisabledAttribute;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "aurelia-dependency-injection", "aurelia-templating", "./ion-item", "./baseComponent"], function (require, exports, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_templating_1, ion_item_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonInput = (function (_super) {
        __extends(IonInput, _super);
        function IonInput(element, ionItem) {
            var _this = _super.call(this, element) || this;
            _this.ionItem = ionItem;
            _this.addClassLabel("input");
            _this.ionItem.addClass(["item-input"]);
            return _this;
        }
        IonInput.prototype.attached = function () {
            this.addElementClassLabel(this._textInput || this._dateInput, "text-input");
        };
        IonInput.prototype.valueChanged = function (newValue) {
            var classes = ["item-input-has-value", "input-has-value"];
            if (newValue)
                this.ionItem.addClass(classes);
            else
                this.ionItem.removeClass(classes);
        };
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", HTMLInputElement)
        ], IonInput.prototype, "_dateInput", void 0);
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", String)
        ], IonInput.prototype, "type", void 0);
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", Object)
        ], IonInput.prototype, "value", void 0);
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", String)
        ], IonInput.prototype, "field", void 0);
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", Boolean)
        ], IonInput.prototype, "readonly", void 0);
        __decorate([
            aurelia_templating_1.bindable,
            __metadata("design:type", Boolean)
        ], IonInput.prototype, "disable", void 0);
        IonInput = __decorate([
            aurelia_dependency_injection_1.inject(Element, aurelia_framework_1.Parent.of(ion_item_1.IonItem)),
            __metadata("design:paramtypes", [Element, ion_item_1.IonItem])
        ], IonInput);
        return IonInput;
    }(baseComponent_1.BaseComponent));
    exports.IonInput = IonInput;
});
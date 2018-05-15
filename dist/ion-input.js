define(["require", "exports", "tslib", "aurelia-framework", "aurelia-dependency-injection", "aurelia-templating", "./ion-item", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_dependency_injection_1, aurelia_templating_1, ion_item_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonInput = (function (_super) {
        tslib_1.__extends(IonInput, _super);
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
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", HTMLInputElement)
        ], IonInput.prototype, "_dateInput", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonInput.prototype, "type", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", Object)
        ], IonInput.prototype, "value", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonInput.prototype, "field", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], IonInput.prototype, "readonly", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], IonInput.prototype, "disable", void 0);
        IonInput = tslib_1.__decorate([
            aurelia_dependency_injection_1.inject(Element, aurelia_framework_1.Parent.of(ion_item_1.IonItem)),
            tslib_1.__metadata("design:paramtypes", [Element, ion_item_1.IonItem])
        ], IonInput);
        return IonInput;
    }(baseComponent_1.BaseComponent));
    exports.IonInput = IonInput;
});

define(["require", "exports", "tslib", "aurelia-framework", "aurelia-dependency-injection", "./ion-item", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, aurelia_dependency_injection_1, ion_item_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonLabel = (function (_super) {
        tslib_1.__extends(IonLabel, _super);
        function IonLabel(element, ionItem) {
            var _this = _super.call(this, element) || this;
            _this.ionItem = ionItem;
            _this.addClassLabel("label");
            if (_this.element.attributes.getNamedItem("floating"))
                _this.ionItem.addClass(["item-label-floating"]);
            if (_this.element.attributes.getNamedItem("fixed"))
                _this.ionItem.addClass(["item-label-fixed"]);
            return _this;
        }
        IonLabel = tslib_1.__decorate([
            aurelia_dependency_injection_1.inject(Element, aurelia_framework_1.Parent.of(ion_item_1.IonItem)),
            tslib_1.__metadata("design:paramtypes", [Element, ion_item_1.IonItem])
        ], IonLabel);
        return IonLabel;
    }(baseComponent_1.BaseComponent));
    exports.IonLabel = IonLabel;
});

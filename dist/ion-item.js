define(["require", "exports", "tslib", "./baseComponent", "aurelia-framework"], function (require, exports, tslib_1, baseComponent_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonItem = (function (_super) {
        tslib_1.__extends(IonItem, _super);
        function IonItem(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("item");
            _this.addClass(["item-block"]);
            return _this;
        }
        IonItem = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonItem);
        return IonItem;
    }(baseComponent_1.BaseComponent));
    exports.IonItem = IonItem;
});

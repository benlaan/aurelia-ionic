define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonButtons = (function (_super) {
        tslib_1.__extends(IonButtons, _super);
        function IonButtons(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("bar-buttons");
            return _this;
        }
        IonButtons = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonButtons);
        return IonButtons;
    }(baseComponent_1.BaseComponent));
    exports.IonButtons = IonButtons;
});

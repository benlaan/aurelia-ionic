define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonFooter = (function (_super) {
        tslib_1.__extends(IonFooter, _super);
        function IonFooter(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("footer");
            return _this;
        }
        IonFooter = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonFooter);
        return IonFooter;
    }(baseComponent_1.BaseComponent));
    exports.IonFooter = IonFooter;
});

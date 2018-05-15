define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonHeader = (function (_super) {
        tslib_1.__extends(IonHeader, _super);
        function IonHeader(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("header");
            return _this;
        }
        IonHeader = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonHeader);
        return IonHeader;
    }(baseComponent_1.BaseComponent));
    exports.IonHeader = IonHeader;
});

define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonCardHeader = (function (_super) {
        tslib_1.__extends(IonCardHeader, _super);
        function IonCardHeader(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("card-header");
            return _this;
        }
        IonCardHeader = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonCardHeader);
        return IonCardHeader;
    }(baseComponent_1.BaseComponent));
    exports.IonCardHeader = IonCardHeader;
});

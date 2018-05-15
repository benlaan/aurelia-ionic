define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonRow = (function (_super) {
        tslib_1.__extends(IonRow, _super);
        function IonRow(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("row");
            return _this;
        }
        IonRow = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonRow);
        return IonRow;
    }(baseComponent_1.BaseComponent));
    exports.IonRow = IonRow;
});

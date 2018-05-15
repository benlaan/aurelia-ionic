define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonColumn = (function (_super) {
        tslib_1.__extends(IonColumn, _super);
        function IonColumn(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("column");
            return _this;
        }
        IonColumn = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonColumn);
        return IonColumn;
    }(baseComponent_1.BaseComponent));
    exports.IonColumn = IonColumn;
});

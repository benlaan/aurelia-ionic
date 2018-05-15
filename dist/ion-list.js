define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonList = (function (_super) {
        tslib_1.__extends(IonList, _super);
        function IonList(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("list");
            return _this;
        }
        IonList = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonList);
        return IonList;
    }(baseComponent_1.BaseComponent));
    exports.IonList = IonList;
});

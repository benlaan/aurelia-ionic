define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonCardContent = (function (_super) {
        tslib_1.__extends(IonCardContent, _super);
        function IonCardContent(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("card-content");
            _this.addClass(["outer-content"]);
            return _this;
        }
        IonCardContent = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonCardContent);
        return IonCardContent;
    }(baseComponent_1.BaseComponent));
    exports.IonCardContent = IonCardContent;
});

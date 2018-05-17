define(["require", "exports", "tslib", "aurelia-templating", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_templating_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonContent = (function (_super) {
        tslib_1.__extends(IonContent, _super);
        function IonContent(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("content");
            _this.top = 55;
            _this.bottom = 55;
            return _this;
        }
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", Number)
        ], IonContent.prototype, "top", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", Number)
        ], IonContent.prototype, "bottom", void 0);
        IonContent = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonContent);
        return IonContent;
    }(baseComponent_1.BaseComponent));
    exports.IonContent = IonContent;
});

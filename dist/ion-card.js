define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonCard = (function (_super) {
        tslib_1.__extends(IonCard, _super);
        function IonCard(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("card");
            return _this;
        }
        IonCard = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonCard);
        return IonCard;
    }(baseComponent_1.BaseComponent));
    exports.IonCard = IonCard;
});

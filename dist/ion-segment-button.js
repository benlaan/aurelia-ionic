define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonSegmentButton = (function (_super) {
        tslib_1.__extends(IonSegmentButton, _super);
        function IonSegmentButton(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("segment-button");
            return _this;
        }
        IonSegmentButton.prototype.activatedChanged = function (newActivated) {
            var className = "segment-activated";
            this.removeClass([className]);
            if (newActivated)
                this.addClass([className]);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], IonSegmentButton.prototype, "activated", void 0);
        IonSegmentButton = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonSegmentButton);
        return IonSegmentButton;
    }(baseComponent_1.BaseComponent));
    exports.IonSegmentButton = IonSegmentButton;
});

define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonSegment = (function (_super) {
        tslib_1.__extends(IonSegment, _super);
        function IonSegment(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("segment");
            _this.platform = agent_1.Agent.platform;
            return _this;
        }
        IonSegment.prototype.getClassName = function (name) {
            return "segment-" + this.platform + "-" + name;
        };
        IonSegment.prototype.colorChanged = function (newColor) {
            var existingClassName = this.getClassName(this.color);
            this.removeClass([existingClassName]);
            var className = this.getClassName(newColor);
            this.addClass([className]);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonSegment.prototype, "color", void 0);
        IonSegment = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonSegment);
        return IonSegment;
    }(baseComponent_1.BaseComponent));
    exports.IonSegment = IonSegment;
});

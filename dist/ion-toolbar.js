define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonToolbar = (function (_super) {
        tslib_1.__extends(IonToolbar, _super);
        function IonToolbar(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("toolbar");
            _this.platform = agent_1.Agent.platform;
            return _this;
        }
        IonToolbar.prototype.getClassName = function (name) {
            return "toolbar-" + this.platform + "-" + name;
        };
        IonToolbar.prototype.colorChanged = function (newColor) {
            var existingClassName = this.getClassName(this.color);
            this.removeClass([existingClassName]);
            var className = this.getClassName(newColor);
            this.addClass([className]);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonToolbar.prototype, "color", void 0);
        IonToolbar = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonToolbar);
        return IonToolbar;
    }(baseComponent_1.BaseComponent));
    exports.IonToolbar = IonToolbar;
});

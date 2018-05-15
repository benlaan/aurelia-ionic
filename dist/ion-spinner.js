define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonSpinner = (function (_super) {
        tslib_1.__extends(IonSpinner, _super);
        function IonSpinner(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("spinner");
            return _this;
        }
        IonSpinner.prototype.getClassName = function (name) {
            return "spinner-" + agent_1.Agent.platform + "-" + name;
        };
        IonSpinner.prototype.nameChanged = function (newName) {
            var existingClassName = this.getClassName(this.name);
            this.removeClass([existingClassName]);
            var className = this.getClassName(newName);
            this.addClass([className, "spinner-" + newName]);
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonSpinner.prototype, "name", void 0);
        IonSpinner = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonSpinner);
        return IonSpinner;
    }(baseComponent_1.BaseComponent));
    exports.IonSpinner = IonSpinner;
});

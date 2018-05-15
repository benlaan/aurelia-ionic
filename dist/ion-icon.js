define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "aurelia-templating", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, aurelia_templating_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonIcon = (function (_super) {
        tslib_1.__extends(IonIcon, _super);
        function IonIcon(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("icon");
            return _this;
        }
        IonIcon.prototype.getClassName = function (name) {
            return "ion-" + agent_1.Agent.platform + "-" + name;
        };
        IonIcon.prototype.colorChanged = function (newColor) {
            var htmlElement = this.element;
            if (newColor)
                htmlElement.style.color = newColor;
            else
                delete htmlElement.style.color;
        };
        IonIcon.prototype.nameChanged = function (newName) {
            var existingClassName = this.getClassName(this.name);
            this.removeClass([existingClassName]);
            var className = this.getClassName(newName);
            this.addClass([className]);
        };
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonIcon.prototype, "color", void 0);
        tslib_1.__decorate([
            aurelia_templating_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonIcon.prototype, "name", void 0);
        IonIcon = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonIcon);
        return IonIcon;
    }(baseComponent_1.BaseComponent));
    exports.IonIcon = IonIcon;
});

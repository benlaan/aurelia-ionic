define(["require", "exports", "./utilities/agent"], function (require, exports, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseComponent = (function () {
        function BaseComponent(element) {
            this.element = element;
        }
        BaseComponent.prototype.addClassLabel = function (label) {
            this.addElementClassLabel(this.element, label);
        };
        BaseComponent.prototype.addElementClassLabel = function (element, label) {
            element.classList.add(label, label + "-" + agent_1.Agent.platform);
        };
        BaseComponent.prototype.addClass = function (classes) {
            (_a = this.element.classList).add.apply(_a, classes);
            var _a;
        };
        BaseComponent.prototype.removeClass = function (classes) {
            (_a = this.element.classList).remove.apply(_a, classes);
            var _a;
        };
        return BaseComponent;
    }());
    exports.BaseComponent = BaseComponent;
});

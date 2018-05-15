define(["require", "exports", "tslib", "aurelia-framework", ".././utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonButtonCustomAttribute = (function () {
        function IonButtonCustomAttribute(element) {
            this.element = element;
            var platform = agent_1.Agent.platform;
            this.element.classList.add("bar-buttons", "bar-buttons-" + platform, "bar-button", "bar-button-" + platform, "bar-button-default", "bar-button-default-" + platform, "bar-button-menutoggle", "bar-button-menutoggle-" + platform);
        }
        IonButtonCustomAttribute = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonButtonCustomAttribute);
        return IonButtonCustomAttribute;
    }());
    exports.IonButtonCustomAttribute = IonButtonCustomAttribute;
});

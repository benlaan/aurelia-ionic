var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", ".././utilities/agent"], function (require, exports, aurelia_framework_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonButtonCustomAttribute = (function () {
        function IonButtonCustomAttribute(element) {
            this.element = element;
            var platform = agent_1.Agent.platform;
            this.element.classList.add("bar-buttons", "bar-buttons-" + platform, "bar-button", "bar-button-" + platform, "bar-button-default", "bar-button-default-" + platform, "bar-button-menutoggle", "bar-button-menutoggle-" + platform);
        }
        IonButtonCustomAttribute = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element])
        ], IonButtonCustomAttribute);
        return IonButtonCustomAttribute;
    }());
    exports.IonButtonCustomAttribute = IonButtonCustomAttribute;
});

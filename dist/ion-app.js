var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonApp = (function (_super) {
        __extends(IonApp, _super);
        function IonApp(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("app-root");
            _this.addClass(["platform-core", "enable-hover", agent_1.Agent.platform]);
            return _this;
        }
        IonApp = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element])
        ], IonApp);
        return IonApp;
    }(baseComponent_1.BaseComponent));
    exports.IonApp = IonApp;
});

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
    var IonToolbar = (function (_super) {
        __extends(IonToolbar, _super);
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
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], IonToolbar.prototype, "color", void 0);
        IonToolbar = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element])
        ], IonToolbar);
        return IonToolbar;
    }(baseComponent_1.BaseComponent));
    exports.IonToolbar = IonToolbar;
});

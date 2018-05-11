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
    var IonSpinner = (function (_super) {
        __extends(IonSpinner, _super);
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
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], IonSpinner.prototype, "name", void 0);
        IonSpinner = __decorate([
            aurelia_framework_1.autoinject,
            __metadata("design:paramtypes", [Element])
        ], IonSpinner);
        return IonSpinner;
    }(baseComponent_1.BaseComponent));
    exports.IonSpinner = IonSpinner;
});

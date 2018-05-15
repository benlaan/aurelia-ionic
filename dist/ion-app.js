define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonApp = (function (_super) {
        tslib_1.__extends(IonApp, _super);
        function IonApp(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("app-root");
            _this.addClass(["platform-core", "enable-hover", agent_1.Agent.platform]);
            return _this;
        }
        IonApp = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonApp);
        return IonApp;
    }(baseComponent_1.BaseComponent));
    exports.IonApp = IonApp;
});

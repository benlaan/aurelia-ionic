define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent", "./utilities/agent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1, agent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonTitle = (function (_super) {
        tslib_1.__extends(IonTitle, _super);
        function IonTitle(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("title");
            _this.platform = agent_1.Agent.platform;
            return _this;
        }
        IonTitle = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonTitle);
        return IonTitle;
    }(baseComponent_1.BaseComponent));
    exports.IonTitle = IonTitle;
});

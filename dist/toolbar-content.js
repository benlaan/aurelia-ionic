define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolbarContent = (function (_super) {
        tslib_1.__extends(ToolbarContent, _super);
        function ToolbarContent(element) {
            var _this = _super.call(this, element) || this;
            _this.addClassLabel("toolbar-content");
            return _this;
        }
        ToolbarContent = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], ToolbarContent);
        return ToolbarContent;
    }(baseComponent_1.BaseComponent));
    exports.ToolbarContent = ToolbarContent;
});

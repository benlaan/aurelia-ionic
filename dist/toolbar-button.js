define(["require", "exports", "tslib", "aurelia-framework"], function (require, exports, tslib_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ToolbarButton = (function () {
        function ToolbarButton() {
        }
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], ToolbarButton.prototype, "title", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], ToolbarButton.prototype, "icon", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", Boolean)
        ], ToolbarButton.prototype, "disabled", void 0);
        ToolbarButton = tslib_1.__decorate([
            aurelia_framework_1.autoinject
        ], ToolbarButton);
        return ToolbarButton;
    }());
    exports.ToolbarButton = ToolbarButton;
});

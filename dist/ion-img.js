define(["require", "exports", "tslib", "aurelia-framework", "./baseComponent"], function (require, exports, tslib_1, aurelia_framework_1, baseComponent_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IonImg = (function (_super) {
        tslib_1.__extends(IonImg, _super);
        function IonImg(element) {
            return _super.call(this, element) || this;
        }
        IonImg.prototype.attached = function () {
            this.addIntersectionObserver();
        };
        IonImg.prototype.srcChanged = function (newValue) {
            this.addIntersectionObserver();
        };
        IonImg.prototype.addIntersectionObserver = function () {
            var _this = this;
            if (!this.src)
                return;
            if ('IntersectionObserver' in window) {
                this.removeIntersectionObserver();
                this.intersectionObserver = new IntersectionObserver(function (data) {
                    if (data[0].isIntersecting) {
                        _this.loadSrc = _this.src;
                        _this.removeIntersectionObserver();
                    }
                });
                this.intersectionObserver.observe(this.element);
            }
            else {
                setTimeout(function () { return _this.loadSrc = _this.src; }, 200);
            }
        };
        IonImg.prototype.removeIntersectionObserver = function () {
            if (this.intersectionObserver) {
                this.intersectionObserver.disconnect();
                this.intersectionObserver = undefined;
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonImg.prototype, "src", void 0);
        tslib_1.__decorate([
            aurelia_framework_1.bindable,
            tslib_1.__metadata("design:type", String)
        ], IonImg.prototype, "alt", void 0);
        IonImg = tslib_1.__decorate([
            aurelia_framework_1.autoinject,
            tslib_1.__metadata("design:paramtypes", [Element])
        ], IonImg);
        return IonImg;
    }(baseComponent_1.BaseComponent));
    exports.IonImg = IonImg;
});

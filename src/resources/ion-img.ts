// This component was lifted shamelessly from https://github.com/ionic-team/ionic/blob/master/core/src/components/img/img.tsx

import { autoinject, bindable } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonImg extends BaseComponent {

    private intersectionObserver: IntersectionObserver;
    private loadSrc: string;

    constructor(element: Element) {

        super(element);
    }

    @bindable
    public src: string;

    @bindable
    public alt: string;

    public attached(): void {

        this.addIntersectionObserver();
    }

    private srcChanged(newValue: string): void {

        this.addIntersectionObserver();
    }

    private addIntersectionObserver(): void {

        if (!this.src)
            return;

        if ('IntersectionObserver' in window) {

            this.removeIntersectionObserver();
            this.intersectionObserver = new IntersectionObserver(data => {

                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {

                    this.loadSrc = this.src;
                    this.removeIntersectionObserver();
                }
            });

            this.intersectionObserver.observe(this.element);
        }
        else {

            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.loadSrc = this.src, 200);
        }
    }

    private removeIntersectionObserver() {

        if (this.intersectionObserver) {

            this.intersectionObserver.disconnect();
            this.intersectionObserver = undefined;
        }
    }
}

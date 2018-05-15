import { autoinject, bindable } from "aurelia-framework";

import { BaseComponent } from "./baseComponent";

@autoinject
export class IonSegmentButton extends BaseComponent {

    @bindable
    public activated: boolean;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("segment-button");
    }

    public activatedChanged(newActivated: string): void {

        const className = "segment-activated";

        this.removeClass([className]);
        if (newActivated)
            this.addClass([className]);
    }
}

import { bindable } from 'aurelia-templating';
import { autoinject } from "aurelia-framework";

import { BaseComponent } from "./baseComponent";

@autoinject
export class IonContent extends BaseComponent {

    @bindable
    public top: number;

    @bindable
    public bottom: number;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("content");

        this.top = 55;
        this.bottom = 55;
    }
}

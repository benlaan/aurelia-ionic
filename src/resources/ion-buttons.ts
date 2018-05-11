import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonButtons extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("bar-buttons");
    }
}

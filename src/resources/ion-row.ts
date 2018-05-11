import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonRow extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("row");
    }
}

import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonFooter extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("footer");
    }
}
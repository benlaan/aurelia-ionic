import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonCard extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("card");
    }
}

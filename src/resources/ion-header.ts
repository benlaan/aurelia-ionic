import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonHeader extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("header");
    }
}
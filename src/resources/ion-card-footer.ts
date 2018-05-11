import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonCardFooter extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("card-footer");
        this.addClass(["card"]);
    }
}

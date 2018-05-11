import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonCardContent extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("card-content");
        this.addClass(["outer-content"]);
    }
}

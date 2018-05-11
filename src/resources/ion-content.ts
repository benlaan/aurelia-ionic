import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class IonContent extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("content");
    }
}
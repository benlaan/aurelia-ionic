import { BaseComponent } from './baseComponent';
import { autoinject } from "aurelia-framework";

@autoinject
export class IonItem extends BaseComponent {

    constructor(element: Element) {

        super(element);

        this.addClassLabel("item");
        this.addClass(["item-block"]);
    }
}
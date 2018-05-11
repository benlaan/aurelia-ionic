import { Parent } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { bindable } from "aurelia-templating";

import { IonItem } from "./ion-item";
import { BaseComponent } from './baseComponent';

@inject(Element, Parent.of(IonItem))
export class IonLabel extends BaseComponent {

    constructor(element: Element, private ionItem: IonItem) {

        super(element);
        this.addClassLabel("label");
   
        if (this.element.attributes.getNamedItem("floating"))
            this.ionItem.addClass(["item-label-floating"]);

        if (this.element.attributes.getNamedItem("fixed"))
            this.ionItem.addClass(["item-label-fixed"]);
    }
}
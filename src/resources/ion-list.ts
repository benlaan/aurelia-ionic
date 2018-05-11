import { autoinject } from "aurelia-framework";

import { BaseComponent } from './baseComponent';

@autoinject
export class IonList extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("list");
    }
}
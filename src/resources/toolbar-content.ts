import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class ToolbarContent extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("toolbar-content");
    }
}
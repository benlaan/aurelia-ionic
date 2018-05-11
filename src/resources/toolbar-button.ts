import { autoinject, bindable } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";

@autoinject
export class ToolbarButton {

    @bindable
    public title: string;

    @bindable
    public icon: string;

    @bindable
    public disabled: boolean;
}

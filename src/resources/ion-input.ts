import { Parent } from "aurelia-framework";
import { inject } from "aurelia-dependency-injection";
import { bindable } from "aurelia-templating";

import { IonItem } from "./ion-item";
import { BaseComponent } from "./baseComponent";

@inject(Element, Parent.of(IonItem))
export class IonInput extends BaseComponent {

    private _dateInput: HTMLInputElement;
    private _textInput: HTMLInputElement;

    @bindable
    public type: string

    @bindable
    public value: any;

    @bindable
    public name: string;

    @bindable
    public readonly: boolean;

    @bindable
    public disable: boolean;

    constructor(element: Element, private ionItem: IonItem) {

        super(element);
        this.addClassLabel("input");
        this.ionItem.addClass(["item-input"]);
    }

    public attached(): void {

        this.addElementClassLabel(this._textInput || this._dateInput, "text-input");
    }

    public valueChanged(newValue: any) {

        const classes = ["item-input-has-value", "input-has-value"];
        if (newValue)
            this.ionItem.addClass(classes);
        else
            this.ionItem.removeClass(classes);
    }
}

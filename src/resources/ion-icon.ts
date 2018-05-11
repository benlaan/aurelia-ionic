import { autoinject } from "aurelia-framework";

import { BaseComponent } from './baseComponent';
import { bindable } from "aurelia-templating";
import { Agent } from './utilities/agent';

@autoinject
export class IonIcon extends BaseComponent {

    @bindable
    public color: string;

    @bindable
    public name: string;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("icon");
    }

    private getClassName(name: string): string {

        return `ion-${Agent.platform}-${name}`;
    }

    public colorChanged(newColor: string): void {

        const htmlElement = (<HTMLElement>this.element);
        if (newColor)
            htmlElement.style.color = newColor;
        else
            delete htmlElement.style.color;
    }

    public nameChanged(newName: string): void {

        var existingClassName = this.getClassName(this.name);
        this.removeClass([existingClassName]);

        var className = this.getClassName(newName);
        this.addClass([className]);
    }
}

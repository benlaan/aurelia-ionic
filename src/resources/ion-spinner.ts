import { autoinject, bindable } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";
import { Agent } from './utilities/agent';

@autoinject
export class IonSpinner extends BaseComponent {

    @bindable
    public name: string;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("spinner");
    }

    private getClassName(name: string): string {

        return `spinner-${Agent.platform}-${name}`;
    }

    public nameChanged(newName: string): void {

        var existingClassName = this.getClassName(this.name);
        this.removeClass([existingClassName]);

        var className = this.getClassName(newName);
        this.addClass([className, "spinner-" + newName]);
    }
}

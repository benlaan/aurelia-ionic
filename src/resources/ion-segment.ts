import { autoinject, bindable } from "aurelia-framework";

import { BaseComponent } from "./baseComponent";
import { Agent } from "./utilities/agent";

@autoinject
export class IonSegment extends BaseComponent {

    @bindable
    public color: string;

    private platform: string;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("segment");

        this.platform = Agent.platform;
    }

    private getClassName(name: string): string {

        return `segment-${this.platform}-${name}`;
    }

    public colorChanged(newColor: string): void {

        var existingClassName = this.getClassName(this.color);
        this.removeClass([existingClassName]);

        var className = this.getClassName(newColor);
        this.addClass([className]);
    }
}

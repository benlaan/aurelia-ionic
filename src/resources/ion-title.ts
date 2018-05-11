import { autoinject } from "aurelia-framework";
import { BaseComponent } from "./baseComponent";
import { Agent } from './utilities/agent';

@autoinject
export class IonTitle extends BaseComponent {

    private platform: string;

    constructor(element: Element) {

        super(element);
        this.addClassLabel("title");
        this.platform = Agent.platform;
    }
}

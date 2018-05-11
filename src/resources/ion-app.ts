import { autoinject } from "aurelia-framework";

import { BaseComponent } from "./baseComponent";
import { Agent } from './utilities/agent';

@autoinject
export class IonApp extends BaseComponent {

    constructor(element: Element) {

        super(element);
        this.addClassLabel("app-root");
        this.addClass(["platform-core", "enable-hover", Agent.platform]);
    }
}

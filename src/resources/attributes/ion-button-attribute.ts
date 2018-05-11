import { autoinject } from 'aurelia-framework';
import { Agent } from '.././utilities/agent';

@autoinject
export class IonButtonCustomAttribute {

    constructor(private element: Element) {

        var platform = Agent.platform;

        this.element.classList.add(
            "bar-buttons", `bar-buttons-${platform}`, "bar-button",
            `bar-button-${platform}`, "bar-button-default", `bar-button-default-${platform}`,
            "bar-button-menutoggle", `bar-button-menutoggle-${platform}`
        );
    }
}

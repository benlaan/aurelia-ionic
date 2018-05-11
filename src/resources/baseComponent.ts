import { Agent } from "./utilities/agent";

export class BaseComponent {

    constructor(protected element: Element) {
    }

    protected addClassLabel(label: string): void {

        this.addElementClassLabel(this.element, label);
    }

    public addElementClassLabel(element: Element, label: string): void {

        element.classList.add(label, `${label}-${Agent.platform}`);
    }

    public addClass(classes: string[]): any {

        this.element.classList.add(...classes);
    }

    public removeClass(classes: string[]): any {

        this.element.classList.remove(...classes);
    }
}

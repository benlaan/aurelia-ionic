import { inject, customAttribute, DOM } from 'aurelia-framework';

@customAttribute('disable')
@inject(DOM.Element)
export class DisabledAttribute {

  constructor(private element: Element) { 

  }

  valueChanged(newValue: string, oldValue: string) {

    if (!newValue || newValue == false.toString())
      this.element.removeAttribute('disabled');
    else
      this.element.setAttribute('disabled', newValue);
  }
}
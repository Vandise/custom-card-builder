export default class Widget {

  constructor(id, label, component, form) {
    this.id = id;
    this.component = component;
    this.form = form;
    this.label = label;
  }

  getForm() {
    return this.form;
  }

  getComponent() {
    return this.component;
  }

  getID() {
    return this.id;
  }

  getLabel() {
    return this.label;
  }
}
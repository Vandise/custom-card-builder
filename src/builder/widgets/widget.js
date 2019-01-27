import React from 'react';

export default class Widget {

  constructor(id, label, component, form) {
    this.id = id;
    this.component = component;
    this.form = form;
    this.label = label;
  }

  getForm() {
    const Form = this.form;
    return (
      <Form type={this.id} />
    );
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
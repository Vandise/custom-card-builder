import React from 'react';

export default class TextBoxForm extends React.Component {

  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(this.refs);
  }

  render() {
    return (
      <form className='widget-form-container' onSubmit={ this.onSubmit }>
        <fieldset className='form-fieldset'>
          <legend>Text Box Widget</legend>

          <div className='input-section'>
            <label htmlFor='widget-textbox-label'>
              <span className='widget-label'>Textbox Label</span>
              <input type='text' name='widget-textbox-label' id='widget-textbox-label' ref='label' required/>
            </label>
          </div>

          <div className='input-section'>
            <label htmlFor='widget-placeholder-label'>
              <span className='widget-label'>Placeholder</span>
              <input type='text' name='widget-placeholder-label' id='widget-placeholder-label' ref='placeholder' required/>
            </label>
          </div>

          <div className='input-section'>
            <label htmlFor='widget-autofocus-label'>
              <span className='widget-label'>Autofocus</span>
              <input type='checkbox' name='widget-autofocus-label' id='widget-autofocus-label' ref='autofocus'/>
            </label>
          </div>

          <div className='input-section'>
            <label htmlFor='widget-maxlen-label'>
              <span className='widget-label'>Max Length</span>
              <input type='number' name='widget-maxlen-label' id='widget-maxlen-label' min="0" max="128" ref='maxlength'/>
            </label>
          </div>

        </fieldset>
        <input className='widget-form-submit' type='submit' />
      </form>
    );
  }

};
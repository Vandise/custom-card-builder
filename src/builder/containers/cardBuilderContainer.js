import React from 'react';
import { connect } from 'react-redux';
import Widgets from '../widgets/';

export class CardBuilderContainer extends React.Component {

  generateForm(fields) {
    return fields.map((field) => {
      const Widget = Widgets[field.type];
      const Component = Widget.getComponent();
      return (
        <div className='field-wrapper'>
          <Component {...field} />
        </div>
      );
    });
  }

  render() {
    return(
      <div className='card-builder-container'>
        <div className='card-name-container'>
          <label htmlFor='card-name'>
            <span className='widget-label'>Card Name</span>
            <input type='text' id='card-name' name='card-name' placeholder='Card Name' defaultValue={this.props.name} />
          </label>
        </div>

        <div className='card-form-body'>
          { this.generateForm(this.props.fields) }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  fields: state.cardBuilder.fields,
  name: state.cardBuilder.name,
  fieldCount: state.cardBuilder.fieldCount,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardBuilderContainer);
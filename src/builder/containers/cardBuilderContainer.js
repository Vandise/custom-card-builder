import React from 'react';
import { connect } from 'react-redux';
import WidgetTypes from '../widgets/types';

class CardBuilderContainer extends React.Component {

  generateForm() {
    
  }

  render() {
    return(
      <div className='card-builder-container'>
        <div className='card-name-container'>
          <label htmlFor='card-name'>
            <span className='widget-label'>Card Name</span>
            <input type='text' id='card-name' name='card-name' placeholder='Card Name' />
          </label>
        </div>

        <div className='card-form-body'>
          { this.generateForm() }
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  fields: state.cardBuilder.fields,
  name: state.cardBuilder.name
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CardBuilderContainer);
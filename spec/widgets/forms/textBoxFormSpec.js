import { shallow, mount } from 'enzyme';

describe('Text Box Form', () => {

  let Form;
  let wrapper;

  beforeEach(() => {
    Form = requireModule('widgets/forms/textBoxForm').default;
  });

  it('is encased by a form', () => {
    wrapper = shallow(<Form />);
    expect(wrapper.find('form')).to.have.lengthOf(1);
  });

  describe('form', () => {

    beforeEach(() => {
      wrapper = shallow(<Form />);
    });

    it('has an onSubmit handler', () => {
      expect( wrapper.find('form').first().props() ).to.have.property('onSubmit');
    });

    it('includes a placeholder field', () => {
      expect( wrapper.find('input#widget-placeholder-label') ).to.have.lengthOf(1);
    });

    it('includes a form label field', () => {
      expect( wrapper.find('input#widget-textbox-label') ).to.have.lengthOf(1);
    });

    it('includes an autofocus field', () => {
      expect( wrapper.find('input#widget-autofocus-label') ).to.have.lengthOf(1);
    });

    it('includes a max-length field', () => {
      expect( wrapper.find('input#widget-maxlen-label') ).to.have.lengthOf(1);
    });

    describe('when the form is submitted', () => {

      it('calls onSubmit()', () => {
        const spy = sinon.spy();
        wrapper = mount(<Form />);
        spyOnComponentMethod(wrapper, 'onSubmit', spy);

        wrapper.find('.widget-form-submit').simulate('submit');

        expect(spy).to.have.beenCalled;
      });

      it('adds the field to the fields state', () => {
        wrapper = mount(<Form type='test' />);
        setHTMLNodeValue(wrapper.find('#widget-textbox-label'), 'Test Label');
        wrapper.find('.widget-form-submit').simulate('submit');

        expect(store.getState().cardBuilder.fields).to.deep.include({
          type: 'test',
          label: 'Test Label',
          placeholder: '',
          autofocus: '',
          maxlength: '25' 
        });
      });

    });
  });
});
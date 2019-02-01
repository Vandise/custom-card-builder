import { shallow, mount } from 'enzyme';

describe('Card Builder Container', () => {
  let Container;
  let TextBox;
  let wrapper;

  beforeEach(() => {
    Container = requireModule('containers/cardBuilderContainer').CardBuilderContainer;
    TextBox = requireModule('widgets/components/TextBox').default;
  });

  describe('inputs', () => {

    beforeEach(() => {
      wrapper = shallow(<Container fields={[]} name='New Card' />);
    });

    describe('card-name', () => {
      it('is present', () => {
        expect( wrapper.find('input#card-name') ).to.have.lengthOf(1);
      });

      it('defaults to the name property', () => {
        expect( wrapper.find('input#card-name').props().defaultValue ).to.equal('New Card');
      });
    });

    describe('generated fields', () => {
      const field = { type: 'TEXT_BOX', label: 'GeneratedField', placeholder: 'New Field' };

      it('renders fields from the fields array', () => {
        wrapper = mount(<Container fields={[field]} name='New Card' />);
        expect(wrapper.find('#input-field-GeneratedField').exists()).to.be.true;
      });
    });
  });

});
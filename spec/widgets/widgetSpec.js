describe('Widget', () => {

  let Widget;

  beforeEach(() => {
    Widget = requireModule('widgets/widget').default;
  });

  describe('.getForm', () => {
    it('returns the initialized form', () => {
      const Form = ({ type }) => { return( <p>{type}</p> ); };
      expect( (new Widget('test', 'test', null, Form)).getForm() ).to.deep.equal(
        <Form type={'test'} />
      );
    });
  });

  describe('.getComponent', () => {
    it('returns the initialized component', () => {
      const component = ( <p>This is a mock component</p> );
      expect( (new Widget('test', 'test', component, null)).getComponent() ).to.equal(component);
    });
  });

  describe('.getID', () => {
    it('returns the initialized component', () => {
      const id = 'test';
      expect( (new Widget(id, null, null, null)).getID() ).to.equal(id);
    });
  });

  describe('.getLabel', () => {
    it('returns the initialized label', () => {
      const label = 'test';
      expect( (new Widget(null, label, null, null)).getLabel() ).to.equal(label);
    });
  });
});
describe('Card Builder Reducer', () => {

  let reducer;
  let mockAction = { type: "mock" };

  beforeEach(() => {
    reducer = requireModule('reducers').cardBuilderReducer;
  });

  describe('initial state', () => {
    it('is has a predefined state', () => {
      const initialState = { name: 'Card title', fields: [] };
      expect(reducer(initialState, mockAction)).to.deep.equal(initialState);
    });
  });

  describe('ADD_FIELD', () => {
    it('adds the new field to the fields array', () => {
      const field = { type: 'textbox', label: 'Username' };
      const action = { type: 'ADD_FIELD', payload: { field } };

      expect(reducer(undefined, action).fields).to.deep.equal([field]);
    });
  });
});
describe('Card Builder Reducer', () => {

  let reducer;
  let mockAction = { type: "mock" };

  beforeEach(() => {
    reducer = requireModule('reducers').cardBuilderReducer;
  });

  describe('initial state', () => {
    it('is has a predefined state', () => {
      const initialState = { name: 'Card title', fields: [] };
      expect(reducer(undefined, mockAction)).to.deep.equal(initialState);
    });
  });
});
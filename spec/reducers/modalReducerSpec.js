describe('Modal Reducer', () => {

  let reducer;
  let mockAction = { type: "mock" };

  beforeEach(() => {
    reducer = require('../../src/builder/reducers').modalReducer;
  });

  describe('initial state', () => {
    it('is closed', () => {
      const initialState = { open: false };
      expect(reducer(undefined, mockAction)).to.deep.equal(initialState);
    });
  });

});
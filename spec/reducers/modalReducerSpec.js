describe('Modal Reducer', () => {

  let reducer;
  let mockAction = { type: "mock" };

  beforeEach(() => {
    reducer = requireModule('reducers').modalReducer;
  });

  describe('initial state', () => {
    it('is closed', () => {
      const initialState = { open: false };
      expect(reducer(undefined, mockAction)).to.deep.equal(initialState);
    });
  });

  describe('TOGGLE_MODAL', () => {
    it('toggles the opened state', () => {
      const action = { type: 'TOGGLE_MODAL' };
      expect(reducer([], action)).to.deep.equal({ open: true });
    });
  });
});
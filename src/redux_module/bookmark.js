const TOGGLE = 'bookmark/TOGGLE';

export const makeToggleAction = id => ({
  type: TOGGLE,
  id
});

const initialState = {
  bookmarkList: []
}

function bookmarkReducer(state = initialState, action) {
  if (action.type === TOGGLE) {
    if (state.bookmarkList.includes(action.id)) {
      return ({
        bookmarkList: state.bookmarkList.filter( ele => ele !== action.id)
      });
    } else {
      return ({
        bookmarkList: [...state.bookmarkList, action.id]
      });
    }
  }
  return state;
}

export default bookmarkReducer

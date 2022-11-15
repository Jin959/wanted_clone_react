export const CLOSE = 'modal/CLOSE'; // 0
export const LOGIN = 'modal/LOGIN'; // 1
export const RESISTRATION = 'modal/RESISTRATION'; // 2


const modalFlagReducer = (state, action) => {
  if (state === undefined) { // initialState
    return {
      flag: 0
    }
  }

  switch (action.type) {
    case CLOSE:
      return {
        flag: 0
      }
    case LOGIN:
      return {
        flag: 1
      }
    case RESISTRATION:
      return {
        flag: 2
      }
    default:
      return state
  }
}

export default modalFlagReducer;
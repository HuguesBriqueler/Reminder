import { actions } from "./actions";

const selectedReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SELECT_NOTE:
      return {
        ...state,
        selectedNote: action.payload,
      };
    default:
      return state;
  }
};

export default selectedReducer;

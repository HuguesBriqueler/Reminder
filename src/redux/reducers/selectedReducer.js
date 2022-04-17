import { actions } from "./actions";

export const selectedReducer = (state = {}, action) => {
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

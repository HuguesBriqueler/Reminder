import { actions } from "./actions";

const INITIAL_STATE = {
  editNote: {
    title: "",
    subtitle: "",
    body: "",
    id: "",
    isEdited: false,
  },
};

export default function editReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.EDIT_NOTE:
      return {
        ...state,
        editNote: {
          ...state.editNote,
          title: action.payload.title,
          subtitle: action.payload.subtitle,
          body: action.payload.body,
          id: action.payload.id,
          isEdited: true,
        },
      };
    case actions.RESET_NOTE:
      return {
        ...state,
        editNote: {
          ...state.editNote,
          title: "",
          subtitle: "",
          body: "",
          id: "",
          isEdited: false,
        },
      };
    default:
      return state;
  }
}

import { v4 as uuidv4 } from "uuid";
import { actions } from "./actions";

// Reducer: notesReducer
// Description: Reducer for the notes feature
//    - ADD_NOTE: action to add a note
//              payload: the note to be added, id will be generated
//    - DELETE_NOTE: action to delete a note
//              payload: the id of the note to be deleted
//    - UPDATE_NOTE: action to update a note
//              payload: the id of the note to be updated

const INITIAL_STATE = {
  notes: [
    {
      title: "Cuisine",
      subtitle: "Préparer un Osso buco",
      body: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every. ",
      id: uuidv4(),
    },
    {
      title: "Sport",
      subtitle: "Courir 10km",
      body: "In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. ",
      id: uuidv4(),
    },
    {
      title: "Piano",
      subtitle: "Jouer l'Impromptu",
      body: "Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. ",
      id: uuidv4(),
    },
  ],
};

const notesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: uuidv4() }],
      };

    case actions.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case actions.UPDATE_NOTE:
      const index = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      const updatedNotes = [...state.notes];
      updatedNotes.splice(index, 1, action.payload);
      return {
        ...state,
        notes: updatedNotes,
      };

    default:
      return state;
  }
};

export default notesReducer;

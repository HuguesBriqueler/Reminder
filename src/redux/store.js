import { createStore, combineReducers } from "redux";
import notesReducer from "./reducers/notesReducer";
import { selectedReducer } from "./reducers/selectedReducer";

const rootReducer = combineReducers({
  notes: notesReducer,
  selected: selectedReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

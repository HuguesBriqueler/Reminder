import { createStore, combineReducers } from "redux";
import notesReducer from "./reducers/notesReducer";
import editReducer from "./reducers/editReducer";

const rootReducer = combineReducers({
  notesReducer,
  editReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import Sidebar from "./components/Sidebar/Sidebar";
import NoteForm from "./components/NoteForm/NoteForm";
import ListNotes from "./components/ListNotes/ListNotes";
import DisplayNote from "./components/DisplayNote/DisplayNote";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// HashRouter is used to help Github Pages render the app correctly

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ListNotes />} />
        <Route path="/edit" element={<NoteForm />} />
        <Route path="/note/:id" element={<DisplayNote />} />
      </Routes>
    </Router>
  );
}

export default App;

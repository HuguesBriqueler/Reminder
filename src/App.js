import Sidebar from "./components/Sidebar/Sidebar";
import NoteForm from "./components/NoteForm/NoteForm";
import ListNotes from "./components/ListNotes/ListNotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ListNotes />} />
        <Route path="/edit" element={<NoteForm />} />
      </Routes>
    </Router>
  );
}

export default App;

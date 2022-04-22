import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SideNotes.module.css";
import Note from "./Note/Note";

// Component: SideNotes
// Description:
//    This component is responsible for displaying the notes in the sidebar second pane.
//    It also provide a search bar to filter the notes.
//    Notes are retrieved from the store, filtered according to the search bar value
//    then mapped to provide data to the Note component.

export default function SideNotes() {
  const { notes } = useSelector((state) => state.notesReducer);

  const [notesList, setNotesList] = useState(notes);

  useEffect(() => {
    setNotesList(notes);
  }, [notes]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredNotes = notes.filter((note) => {
      return note.title.toLowerCase().includes(searchValue);
    });
    setNotesList(filteredNotes);
  };

  return (
    <div className={styles.notes_display}>
      <h2>Mes Notes</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          id="searchNotes"
          placeholder="Rechercher"
          onChange={handleSearch}
        />
      </form>
      <ul className={styles.notes_list}>
        {notesList.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            subtitle={note.subtitle}
            body={note.body}
          />
        ))}
      </ul>
    </div>
  );
}

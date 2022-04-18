import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./SideNotes.module.css";
import Note from "./Note/Note";

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

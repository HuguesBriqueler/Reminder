import styles from "./DisplayNote.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Component: DisplayNote
// Description: Displays details of a note
// Note id is provided as a parameter in the url
// The note is retrieved from the store
// The note is displayed in a card

export default function DisplayNote() {
  const { id } = useParams();
  const { notes } = useSelector((state) => state.notesReducer);
  const currentNote = notes.find((note) => note.id === id);

  return (
    <div className={styles.display_txt_zone}>
      <h2 className={styles.title_display}>
        Votre note: {currentNote && `${currentNote.title}`}
      </h2>
      <span className={styles.subtitle_display}>
        {currentNote && `${currentNote.subtitle}`}
      </span>
      <p className={styles.txt_display}>
        {currentNote && `${currentNote.body}`}
      </p>
    </div>
  );
}

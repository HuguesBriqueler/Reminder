import styles from "./ListNotes.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ListNotes() {
  const { notes } = useSelector((state) => state.notesReducer);

  return (
    <div className={styles.container_content}>
      <h2>Voici vos notes</h2>
      <ul className={styles.notes_list_card}>
        {notes.map((note) => (
          <Link to={{ pathname: `/note/${note.id}` }} key={note.id}>
            <li>
              <h2>{note.title}</h2>
              <p>{note.subtitle}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

import styles from "./Note.module.css";
import deleteIcon from "./remove.svg";
import editIcon from "./edit.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Component: Note
// Description:
// 		This component is used to display all notes in the sidebar second pane.
// 		It is composed of a title, subtitle and body.
// 		It also contains a delete button and an edit button.
// 		The delete button is used to delete the note.
// 		The edit button is used to edit the note.
//    It also provide a link to the note details (DisplayNote) using id as url parameter.

export default function Note({ id, title, subtitle, body }) {
  const dispatch = useDispatch();

  const deleteNoteAction = () => {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };

  const editNoteAction = () => {
    dispatch({
      type: "EDIT_NOTE",
      payload: {
        id,
        title,
        subtitle,
        body,
      },
    });
  };

  return (
    <li className={styles.txt_note_prev}>
      <Link to={{ pathname: `/note/${id}` }}>
        <div className={styles.bloc_note_left}>
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
      </Link>
      <div className={styles.bloc_note_right}>
        <button onClick={deleteNoteAction}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
        <Link to="/edit">
          <button onClick={editNoteAction}>
            <img src={editIcon} alt="edit icon" />
          </button>
        </Link>
      </div>
    </li>
  );
}

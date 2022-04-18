import styles from "./Note.module.css";
import deleteIcon from "./remove.svg";
import editIcon from "./edit.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Note({ id, title, subtitle, body }) {
  const dispatch = useDispatch();

  const deleteNoteAction = () => {
    dispatch({
      type: "DELETE_NOTE",
      payload: id,
    });
  };

  return (
    <li className={styles.txt_note_prev}>
      <div className={styles.bloc_note_left}>
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className={styles.bloc_note_right}>
        <button onClick={deleteNoteAction}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
        <button>
          <img src={editIcon} alt="edit icon" />
        </button>
      </div>
    </li>
  );
}

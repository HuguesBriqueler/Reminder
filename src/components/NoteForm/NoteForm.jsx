import { useState, useEffect } from "react";
import styles from "./NoteForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/actions";

// Component: NoteForm
// Description: Displays a form to create a new note or edit an existing one
// The form fields are initialized with empty values for new notes
// Then the editReducer is used to retrieve the note to edit
// If the isEdited flag is set to true, the form fields are initialized with the note values in useEffect
// After validation, the note is created or updated in the store using the proper action
// The form is reset after submission
// But the editReducer is not reset when edit is cancelled,
//    creating a potential issue when a new note is created after an edit.
//    So the editReducer is reset in the Sidebar component to avoid this issue.

export default function NoteForm() {
  const dispatch = useDispatch();

  // Initialize form fields with empty values for new notes
  const [fields, setFields] = useState({
    title: "",
    subtitle: "",
    body: "",
  });
  // Initialize validation flags for new notes
  const [validation, setValidation] = useState({
    title: false,
    subtitle: false,
    body: false,
  });

  // Retrieve the note to edit from the editReducer
  const modifyNote = useSelector((state) => state.editReducer.editNote);

  // Initialize the form fields with the note values to be edited in useEffect if isEdited flag is set to true
  useEffect(() => {
    if (modifyNote.isEdited) {
      setFields({
        title: modifyNote.title,
        subtitle: modifyNote.subtitle,
        body: modifyNote.body,
      });
      // Initialize validation flags with ok values for the note to be edited
      setValidation({
        title: true,
        subtitle: true,
        body: true,
      });
    }
  }, [modifyNote]);

  // Validate fields and dispatch the action to create or update the note
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validation.title && validation.subtitle && validation.body;
    if (isValid) {
      if (modifyNote.isEdited) {
        dispatch({
          type: actions.UPDATE_NOTE,
          payload: {
            id: modifyNote.id,
            title: fields.title,
            subtitle: fields.subtitle,
            body: fields.body,
          },
        });
        dispatch({
          type: actions.RESET_NOTE,
        });
      } else {
        dispatch({
          type: actions.ADD_NOTE,
          payload: {
            title: fields.title,
            subtitle: fields.subtitle,
            body: fields.body,
          },
        });
      }
      setFields({
        title: "",
        subtitle: "",
        body: "",
      });
      setValidation({
        title: false,
        subtitle: false,
        body: false,
      });
    }
  };

  // Two way data binding for form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prevState) => ({ ...prevState, [name]: value }));
    if (value.length > 0 && !validation[name]) {
      setValidation((prevState) => ({ ...prevState, [name]: true }));
    }
    if (value.length === 0 && validation[name]) {
      setValidation((prevState) => ({ ...prevState, [name]: false }));
    }
  };

  return (
    <div className={styles.container_content}>
      <h2>Votre Note</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre</label>
        <input
          onChange={handleChange}
          value={fields.title}
          name="title"
          type="text"
          id="title"
        />
        {!validation.title && (
          <span className={styles.info_validation}>
            Le titre est obligatoire
          </span>
        )}

        <label htmlFor="subtitle">Sous-titre</label>
        <input
          onChange={handleChange}
          value={fields.subtitle}
          name="subtitle"
          type="text"
          id="subtitle"
        />
        {!validation.subtitle && (
          <span className={styles.info_validation}>
            Le sous-titre est obligatoire
          </span>
        )}

        <label htmlFor="content">Votre texte</label>
        <textarea
          onChange={handleChange}
          value={fields.body}
          name="body"
          id="content"
          placeholder="Votre texte..."
        />
        {!validation.body && (
          <span className={styles.info_validation}>
            Le contenu est obligatoire
          </span>
        )}
        <button>Enregistrer</button>
      </form>
    </div>
  );
}

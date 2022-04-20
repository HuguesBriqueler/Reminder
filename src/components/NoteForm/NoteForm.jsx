import { useState, useEffect, useRef } from "react";
import styles from "./NoteForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/reducers/actions";

export default function NoteForm() {
  const dispatch = useDispatch();

  const [fields, setFields] = useState({
    title: "",
    subtitle: "",
    body: "",
  });

  const [validation, setValidation] = useState({
    title: false,
    subtitle: false,
    body: false,
  });

  const modifyNote = useSelector((state) => state.editReducer.editNote);

  useEffect(() => {
    if (modifyNote.isEdited) {
      setFields({
        title: modifyNote.title,
        subtitle: modifyNote.subtitle,
        body: modifyNote.body,
      });
      setValidation({
        title: true,
        subtitle: true,
        body: true,
      });
    }
  }, [modifyNote]);

  const allFields = useRef([]);
  const addField = (field) => {
    if (field && !allFields.current.includes(field)) {
      allFields.current.push(field);
    }
  };

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
          ref={addField}
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
          ref={addField}
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
          ref={addField}
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

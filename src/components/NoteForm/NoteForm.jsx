import { useState, useEffect, useRef } from "react";
import styles from "./NoteForm.module.css";

export default function NoteForm() {
  return (
    <div className={styles.container_content}>
      <h2>Votre Note</h2>
      <form>
        <label htmlFor="title">Titre</label>
        <input type="text" id="title" />

        <label htmlFor="subtitle">Sous-titre</label>
        <input type="text" id="subtitle" />

        <label htmlFor="content">Votre texte</label>
        <textarea id="content" placeholder="Votre texte..." />

        <button>Enregistrer</button>
      </form>
    </div>
  );
}

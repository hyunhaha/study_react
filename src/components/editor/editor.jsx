import React from "react";
import styles from "./editor.module.css";
import CardEditForm from "../card_edit_form/card_edit_form";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>editor</h1>

      {cards.map(card => (
        <CardEditForm card={card} />
      ))}
    </section>
  );
};

export default Editor;

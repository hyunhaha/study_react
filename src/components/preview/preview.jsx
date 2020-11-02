import React from "react";
import styles from "./preview.module.css";
import Card from "../card/card";
const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>preview</h1>
      <ul className={styles.list}>
        {cards.map(card => (
          <Card card={card} />
        ))}
      </ul>
    </section>
  );
};

export default Preview;

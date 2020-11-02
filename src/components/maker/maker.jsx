import React from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useState } from "react";

const Maker = ({ FileInput, authSevice }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "hh",
      company: "sansung",
      theme: "dark",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileURL: "hh.png",
    },
    2: {
      id: "2",
      name: "hh",
      company: "sansung",
      theme: "light",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileUrl: null,
    },
    3: {
      id: "3",
      name: "hh",
      company: "sansung",
      theme: "dark",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileUrl: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authSevice.logout();
  };

  useEffect(() => {
    authSevice.onAuthChange(user => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const addOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };
  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />

      <div className={styles.body}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={addOrUpdateCard}
          updateCard={addOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;

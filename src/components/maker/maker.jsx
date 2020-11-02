import React from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import { useState } from "react";

const Maker = ({ authSevice }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "hh",
      company: "sansung",
      theme: "dark",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileURL: "hh.png",
    },
    {
      id: 1,
      name: "hh",
      company: "sansung",
      theme: "light",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileUrl: null,
    },
    {
      id: 1,
      name: "hh",
      company: "sansung",
      theme: "dark",
      title: "enginner",
      email: "gg@gg.com",
      message: "hi",
      fileName: "image",
      fileUrl: null,
    },
  ]);
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
  const addCard = card => {
    const updated = [...cards, card];
    setCards(updated);
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />

      <div className={styles.body}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>

      <Footer />
    </section>
  );
};

export default Maker;

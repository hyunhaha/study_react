import React from "react";
import styles from "./maker.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authSevice }) => {
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

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />

      <section className={styles.body}>
        <Editor />
        <Preview />
      </section>

      <Footer />
    </section>
  );
};

export default Maker;

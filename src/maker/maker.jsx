import React from "react";
import styles from "./maker.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
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
      <Footer />
    </section>
  );
};

export default Maker;

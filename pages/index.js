import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Rules from "../Components/Rules";

export default function Home() {
  const [mode, setMode] = useState(false); //Toggle the mode
  const [modal, setModal] = useState(false); //Toggle the Rules Modal

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div className={styles.container}>
      <footer>
        <div onClick={changeMode}>{mode ? "ADVANCED" : "NORMAL"} MODE</div>
        <div onClick={() => setModal(!modal)}>RULES</div>
      </footer>
      <Rules mode={mode} isOpen={modal} toggleModal={() => setModal(!modal)} />
    </div>
  );
}

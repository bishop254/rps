import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Rules from "../Components/Rules";
import Header from "../Components/Header";
import Game from "../Components/Game";
import Play from "../Components/Play";
import { ContProvider } from "../Context/Context";


export default function Home() {
  const [mode, setMode] = useState(false); //Toggle the mode
  const [modal, setModal] = useState(false); //Toggle the Rules Modal
  const [pickedChoices, setPickedChoices] = useState({
    user: null,
    comp: null,
    winner: null,
    score: 0
  });

  const changeMode = () => {
    setMode(!mode);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <ContProvider.Provider value={{ pickedChoices, setPickedChoices }}>
        <Header mode={mode} />
        <Game mode={mode} />
        <Play mode={mode} />
      </ContProvider.Provider>

      <footer>
        <div onClick={changeMode}>{mode ? "ADVANCED" : "NORMAL"} MODE</div>
        <div onClick={() => setModal(!modal)}>RULES</div>
      </footer>
      <Rules mode={mode} isOpen={modal} toggleModal={() => setModal(!modal)} />
    </div>
  );
}

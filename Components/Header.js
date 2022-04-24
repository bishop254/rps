import React, { useContext } from "react";
import styles from "../styles/Header.module.css";
import { ContProvider } from "../Context/Context";


const Header = ({ mode }) => {
  const { pickedChoices } = useContext(ContProvider);

  let normalMode = ["SCISSORS", "PAPER", "ROCK"];
  let advancedMode = ["LIZARD", "SPOCK"];

  return (
    <>
      <div className={styles.header}>
        <div className={mode ? styles.advTitle : styles.normTitle}>
          {normalMode.map((option) => (
            <div>{option}</div>
          ))}
          {mode && advancedMode.map((option) => <div>{option}</div>)}
        </div>
        <div className={styles.scoreContainer}>
          <div className={styles.scoreTitle}>SCORE</div>
          <div className={styles.score}>{pickedChoices.score}</div>
        </div>
      </div>
    </>
  );
};

export default Header;

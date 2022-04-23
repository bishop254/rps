import React from "react";
import styles from "../styles/Header.module.css";

const Header = ({ mode }) => {
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
          <div className={styles.score}>{0}</div>
        </div>
      </div>
    </>
  );
};

export default Header;

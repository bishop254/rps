import Image from "next/image";
import React from "react";
import styles from "../styles/Game.module.css";
    

const GameMode = ({ mode }) => {
  let gameOptions = ["scissors", "spock", "paper", "lizard", "rock"];
  let normObjs = gameOptions.filter(
    (option) => gameOptions.indexOf(option) % 2 === 0
  );

  const openPlay = () => {
      console.log('Hello')
  }

  return (
    <div className={styles.gameModeContainer}>
      {mode ? (
        <div className={styles.advanced}>
          {gameOptions.map((option) => (
            <>
              <div
                className={`${option}2`}
                id={option}
                onClick={() => openPlay(option)}
              >
                <Image
                  src={`/images/icon-${option}.svg`}
                  width={50}
                  height={50}
                />
              </div>
            </>
          ))}
        </div>
      ) : (
        <div className={styles.normal}>
          {normObjs.map((option) => (
            <>
              <div
                className={option}
                id={option}
                onClick={() => openPlay(option)}
              >
                <Image
                  src={`/images/icon-${option}.svg`}
                  width={50}
                  height={50}
                />
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameMode;

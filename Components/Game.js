import React from "react";
import styles from "../styles/Game.module.css";
import Image from "next/image";
import GameMode from "./GameMode";

const Game = ({ mode }) => {
  return (
    <div className={styles.mainGame}>
      {mode ? (
        <Image src="/images/bg-pentagon.svg" width={450} height={400} />
      ) : (
        <Image src="/images/bg-triangle.svg" width={400} height={400} />
      )}
      <GameMode mode={mode} />
    </div>
  );
};

export default Game;

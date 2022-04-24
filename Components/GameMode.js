import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Game.module.css";
import { ContProvider } from "../Context/Context";

const SELECTIONS = [
  {
    name: "rock",
    beats: ["scissors", "lizard"],
  },
  {
    name: "scissors",
    beats: ["paper", "lizard"],
  },
  {
    name: "paper",
    beats: ["rock", "spock"],
  },
  {
    name: "lizard",
    beats: ["spock", "paper"],
  },
  {
    name: "spock",
    beats: ["rock", "scissors"],
  },
];

const GameMode = ({ mode }) => {
  const { pickedChoices, setPickedChoices } = useContext(ContProvider);

  let gameOptions = ["scissors", "spock", "paper", "lizard", "rock"];
  let normObjs = gameOptions.filter(
    (option) => gameOptions.indexOf(option) % 2 === 0
  );

  const openPlay = (option) => {
    let mainDiv = document.querySelector(".Game_mainGame__Yidf_");
    let playDiv = document.querySelector(".play");
    let pickedOption = document.getElementById(option).id;

    const selection = SELECTIONS.find(
      (select) => select.name === pickedOption
    );

    let compPick = computerPick(mode);
    let isUserWinner = isWinner(selection, compPick);
    let isCompWinner = isWinner(compPick, selection);

    if (isUserWinner) {
      setPickedChoices({
        user: pickedOption,
        comp: compPick.name,
        winner: true,
        score: pickedChoices.score + 1,
      });
    } else if (isCompWinner) {
      setPickedChoices({
        user: pickedOption,
        comp: compPick.name,
        winner: false,
        score: pickedChoices.score - 1,
      });
    } else {
      setPickedChoices({
        user: pickedOption,
        comp: compPick.name,
        winner: null,
        score: pickedChoices.score,
      });
    }

    playDiv.id = "";
    mainDiv.id = "inactive";
  };


  // Logic to simulate the computer pick which is randomly selected.
  const computerPick = (mod) => {
    let choice = mod ? 5 : 3;
    let randIndex = Math.floor(Math.random() * choice);
    return SELECTIONS[randIndex];
  };

  // Returns true if pick1 beats pick2
  const isWinner = (pick1, pick2) => {
    return pick1.beats.includes(pick2.name);
  };

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

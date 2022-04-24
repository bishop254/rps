import React, { useContext } from 'react'
import Image from "next/image";
import { ContProvider } from '../Context/Context';


const Play = ({ mode }) => {
    const { pickedChoices } = useContext(ContProvider);


    const closePlay = () => {
        let mainDiv = document.querySelector(".Game_mainGame__Yidf_");
        let playDiv = document.querySelector(".play");
        playDiv.id = "inactive";
        mainDiv.id = "";
    };

    let userP = pickedChoices.user;
    let compP = pickedChoices.comp;

    return (
        <>
            <div className="play" id="inactive">

                <div className="playBody">
                    <div className='iconDiv'>
                        <div className='iconDivText'>YOU PICKED</div>
                        <div className={mode ? `${userP}2` : userP} id="playIcon">
                            <Image src={`/images/icon-${userP}.svg`} width={60} height={60} />
                        </div>
                    </div>
                    <div className='iconDiv'>
                        <div className='iconDivText'>THE HOUSE PICKED</div>
                        <div className={mode ? `${compP}2` : compP} id="playIcon">
                            <Image src={`/images/icon-${compP}.svg`} width={60} height={60} />
                        </div>
                    </div>
                </div>

                <div className="middleDiv">
                    <div className="text">
                        {pickedChoices.winner === null
                            ? "Its a Draw"
                            : pickedChoices.winner
                                ? "You Win"
                                : "You Lose"}
                    </div>
                    <button className="btn" onClick={closePlay}>
                        Play Again
                    </button>
                </div>

            </div>
        </>
    );
}

export default Play
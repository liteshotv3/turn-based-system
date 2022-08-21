import React, { useState } from "react";
import Zone from "./Zone";
import "./styles/dragula.min.css"
import { cardMovmentFunctionality } from "./config/dragulaConfig";

// const gameConfig = {
//     cardRowsNumber: 6,
// }

function GameBoard(props) {
    const { tokens, zones } = props
    co

    return <div
        ref={cardMovmentFunctionality}
        id="gameboard"
        className="gameboard container mx-3 mt-3 mb-3"
    >
        {
            // [...Array(gameConfig.cardRowsNumber)]
            zones
                .map((zoneInfo, i) => <Zone
                    info={zoneInfo}
                    key={`card-row-${i}`}
                    rowNumber={i} />)
        }
        {/* should have 6 rows, visible on screen, this number should be variable */}
        {/* should have 12 columns onscreen, each row can scroll across infinite columns? */}
        {/* each row is an array, needs an api to drop cards at the beginning, end, or between cards */}
    </div>
}

export default GameBoard

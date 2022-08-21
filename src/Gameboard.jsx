import React, { useState } from "react";
import Zone from "./Zone";
import "./styles/dragula.min.css"
import { tokenZoneMovmentFunctionality } from "./config/dragulaConfig";

// const gameConfig = {
//     cardRowsNumber: 6,
// }

function GameBoard(props) {
    const { tokens, zones } = props
    const [gameState, setGameState] = useState({})
    console.log({ zones })
    const setUp = () => {

    }

    const formattedZones = () => {
        const buildArrays = (zone) => {
            const array = [];
            [...Array(zone.quantity)].forEach((_, i) => array.push(zone));
            return array
        }
        return zones.map(zone => buildArrays(zone)).flat(2)
    }

    return <div
        ref={tokenZoneMovmentFunctionality}
        id="gameboard"
        className="gameboard container mx-3 mt-3 mb-3"
    >
        {
            formattedZones().map((eachZone, i) => <Zone
                index={i + 1}
                info={eachZone}
                key={`zone-row-${i}`}
                rowNumber={i} />)
        }
        {/* each row is an array, needs an api to drop cards at the beginning, end, or between cards */}
    </div>
}

export default GameBoard

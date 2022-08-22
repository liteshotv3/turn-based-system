import React, { useEffect, useState } from "react";
import Zone from "./Zone";
import "./styles/dragula.min.css"
import { tokenZoneMovmentFunctionality } from "./config/dragulaConfig";

// const gameConfig = {
//     cardRowsNumber: 6,
// }

function GameBoard(props) {
    const { tokens, zones } = props
    const [zoneState, setZoneState] = useState(createZoneState(zones))


    function createZoneState(zones) {
        const zoneState = {}
        zones.forEach(zoneType => {
            for (let i = 0; i < zoneType.quantity; i++) {
                zoneState[`${zoneType.name}-${i}`] = []
            }
        })
        // special for testing:
        zoneState["location-0"] = tokens
        return zoneState
    }

    return <div
        ref={tokenZoneMovmentFunctionality}
        id="gameboard"
        className="gameboard container mx-3 mt-3 mb-3"
    >
        {console.log({ zoneState })}
        {
            Object.entries(zoneState).map((zone) => <Zone
                key={`zone-${zone[0]}`}
                name={zone[0]}
                contents={zone[1]} />)
        }
        {/* each row is an array, needs an api to drop cards at the beginning, end, or between cards */}
    </div>
}

export default GameBoard

import React, { useState } from "react";
import Zones from "./Zones";
import "./styles/dragula.min.css"
import { tokenZoneMovmentFunctionality } from "./config/dragulaConfig";

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
        className="gameboard"
    >
        {/* {console.log({ zoneState })} */}
        {
            Object.entries(zoneState).map((zone) => <Zones
                key={`zone-${zone[0]}`}
                name={zone[0]}
                contents={zone[1]} />)
        }
        {/* each row is an array, needs an api to drop cards at the beginning, end, or between cards */}
    </div>
}

export default GameBoard

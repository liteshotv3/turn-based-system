import React from "react";
import CardRow from './CardRow'
import "./styles/dragula.min.css"
import Dragula from 'react-dragula';

const gameConfig = {
    cardRowsNumber: 6,
}

function GameBoard() {
    const dragulaDecorator = (componentBackingInstance) => {
        if (componentBackingInstance) {
            let options = {
                isContainer: function (el) {
                    return false; // only elements in drake.containers will be taken into account
                },
                moves: function (el, source, handle, sibling) {
                    return true; // elements are always draggable by default
                },
                accepts: function (el, target, source, sibling) {
                    return true; // elements can be dropped in any of the `containers` by default
                },
                invalid: function (el, handle) {
                    return false; // don't prevent any drags from initiating by default
                },
                direction: 'vertical',             // Y axis is considered when determining where an element would be dropped
                copy: false,                       // elements are moved by default, not copied
                copySortSource: false,             // elements in copy-source containers can be reordered
                revertOnSpill: false,              // spilling will put the element back where it was dragged from, if this is true
                removeOnSpill: false,              // spilling will `.remove` the element, if this is true
                mirrorContainer: document.body,    // set the element that gets mirror elements appended
                ignoreInputTextSelection: true,     // allows users to select input text, see details below
                slideFactorX: 0,               // allows users to select the amount of movement on the X axis before it is considered a drag instead of a click
                slideFactorY: 0,               // allows users to select the amount of movement on the Y axis before it is considered a drag instead of a click
            }
            Dragula([...componentBackingInstance.children], options);
        }
    }


    return <div className="gameboard container mx-3 mt-3 mb-3" ref={dragulaDecorator}>
        {
            [...Array(gameConfig.cardRowsNumber)]
                .map((e, i) => <CardRow
                    key={`card-row-${i}`}
                    rowNumber={i} />)
        }
        {/* should have 6 rows, visible on screen, this number should be variable */}
        {/* should have 12 columns onscreen, each row can scroll across infinite columns? */}
        {/* each row is an array, needs an api to drop cards at the beginning, end, or between cards */}
    </div>
}

export default GameBoard

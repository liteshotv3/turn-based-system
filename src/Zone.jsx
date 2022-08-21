import React from 'react'
import Card from './Card'


function Zone(props) {
    const { rowNumber, info } = props
    const cards = [...Array(5)]
    return <div
        data-type="zone"
        id={`row-${rowNumber}`}
        className="zone row border pb-2 pt-2 justify-content-md-center"
    >
        <div className="name-display">{info.name}</div>
        {cards.map((item, index) => <Card key={`card-${item}-${index}`} text={`c-${rowNumber}-${index}`} />)}
    </div >
}

export default Zone

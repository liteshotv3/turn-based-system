import React from 'react'
import Card from './Card'


function CardRow(props) {
    const { rowNumber } = props
    const cards = [...Array(5)]
    return <div
        id={`row-${rowNumber}`
        }
        className="card-row row border pb-2 pt-2 justify-content-md-center"
    >
        {cards.map((item, index) => <Card key={`card-${item}-${index}`} text={`c-${rowNumber}-${index}`} />)}
    </div >
}

export default CardRow

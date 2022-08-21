import React from 'react'
import Token from './Token'


function Zone(props) {
    const { rowNumber, info, index } = props
    const tokens = [...Array(5)]
    return <div
        data-type="zone"
        id={`row-${rowNumber}`}
        className="zone row border pb-2 pt-2 justify-content-md-center "
    >
        <span className="name-display"><h3>{info.name} {index}</h3></span>
        {tokens.map((item, index) => <Token key={`token-${item}-${index}`} text={`t-${rowNumber}-${index}`} />)}
    </div >
}

export default Zone

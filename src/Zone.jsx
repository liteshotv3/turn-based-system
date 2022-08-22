import React from 'react'
import Token from './Token'


function Zone(props) {
    const { name, contents } = props
    // const tokens = [...Array(5)]
    console.log({ name, contents })
    return <div
        data-type="zone"
        id={`zone-${name}`}
        className="zone row justify-content-md-center "
    >
        <span className="name-display unselectable"><h3>{name}</h3></span>
        {contents.map((item, index) => <Token key={`token-${item.name}-${index}`} text={item.name} />)}
    </div >
}

export default Zone

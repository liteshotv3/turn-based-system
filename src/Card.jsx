import React from 'react'

function Card(props) {
    const { text } = props

    return <div className="card border col-1 mx-1 content-center">
        <div className="card-body">
            <div className="card-title">{text}</div>
            {/* <div className="card-body">card-body</div> */}
        </div>
    </div>
}

export default Card

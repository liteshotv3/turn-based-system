import React from 'react'

function Token(props) {
    const { text } = props

    return <div
        data-type="token"
        className="token border"
    >
        <div className="token-body">
            <div className="token-title unselectable">{text}</div>
            {/* <div className="card-body">card-body</div> */}
        </div>
    </div>
}

export default Token

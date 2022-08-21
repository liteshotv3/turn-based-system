import React from 'react'

function Token(props) {
    const { text } = props

    return <div
        data-type="token"
        className="token border col-1 mx-1 content-center">
        <div className="token-body">
            <div className="token-title">{text}</div>
            {/* <div className="card-body">card-body</div> */}
        </div>
    </div>
}

export default Token

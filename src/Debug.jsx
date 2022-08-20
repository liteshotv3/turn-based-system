import React, { useState } from 'react';
import PropTypes from 'prop-types';

Debug.propTypes = {

};

function Debug(props) {
    const { children } = props
    const [isVisibile, setIsVisible] = useState(true)

    const buttonName = isVisibile ? "Hide" : "Show"

    return <div className='debug-menu' style={{ "display": `${isVisibile ? "show" : "none"}` }}>
        <button onClick={e => setIsVisible(prev => !prev)}>{buttonName}</button>
        <div>
            {JSON.stringify(...children)}
        </div>
    </div>
}

export default Debug;
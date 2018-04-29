import React from 'react'

const View = ({ prev, next, handleClick }) => (
    <div>
        <button onClick={() => handleClick('prev')}>prev</button>
        <button onClick={() => handleClick('next')}>next</button>
    </div>
)

export default View
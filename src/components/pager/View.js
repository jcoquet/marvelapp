import React from 'react'
import { PAGINATION_PREV, PAGINATION_NEXT } from '../../constants'

const View = ({ prev, next, handleClick }) => (
    <div>
        {prev && <button onClick={() => handleClick(PAGINATION_PREV)}>prev</button>}
        {next && <button onClick={() => handleClick(PAGINATION_NEXT)}>next</button>}
    </div>
)

export default View
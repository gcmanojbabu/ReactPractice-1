import React, { useState } from 'react'
import "../../style/style.css"
import "./CountButton.css"

const CountButton = (props) => {
    const [CurrentCount, setCurrentCount] = useState(0)

    const handleClick = () => {
        setCurrentCount(CurrentCount + props.incrementBy)
    }

    return (
        <div>
            <div className='count-value'>{CurrentCount}</div>
            <button onClick={handleClick}>+1</button>
        </div>
    )
}

export default CountButton

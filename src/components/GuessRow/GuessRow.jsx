import React from "react";
import GuessPegs from  './GuessPegs/GuessPegs'

// # will be props.rowNum
const GuessRow = (props) => (
    <div className="component">
        GuessRow #
        <GuessPegs />
    </div>
)


export default GuessRow;
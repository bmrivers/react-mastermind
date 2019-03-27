import React from "react";
import GuessPegs from  './GuessPegs/GuessPegs'
import GuessScore from  './GuessScore'

// # will be props.rowNum
const GuessRow = (props) => (
    <div className="component">
        GuessRow #
        <GuessPegs />
        <GuessScore />
    </div>
)


export default GuessRow;
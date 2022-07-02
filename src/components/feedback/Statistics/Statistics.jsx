import React from "react";

function Statistics({good, neutral, bad, total} ){
    return (
        <div>
                <p>Good: <span>{good}</span></p>
                <p>Neutral: <span>{neutral}</span></p>
                <p>Bad: <span>{bad}</span></p>
                <p>Total: <span>{total}</span></p>
                <p>Position feedback: <span>{Math.ceil((100 / total) * good)}</span>%</p>
            </div>
    )
}

export default Statistics;
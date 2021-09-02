import React from 'react';
import './Statistics.css';

function Statistics ({good, neutral, bad, total, positivePercentage}) {
        return(
            <div className="Statistics">
                <p>Good: {good }</p>
                <p>Neutral: {neutral }</p>
                <p>Bad: {bad }</p>
                <p>Total: {total }</p>
                <p>Positive feedback: {positivePercentage }%</p>
            </div>
        )
}

export default Statistics;
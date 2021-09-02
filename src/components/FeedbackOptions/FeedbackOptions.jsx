import React from 'react';
import './FeedbackOptions.css';

function FeedbackOptions ({options, onLeaveFeedback}) {
        return (
            <div className="Button__container">
                {options.map(option => (
                    <button
                        className="Button"
                        onClick={onLeaveFeedback}
                        key={option}
                    >
                        {option}
                    </button>
                ))}
            </div>
        )
}

export default FeedbackOptions;
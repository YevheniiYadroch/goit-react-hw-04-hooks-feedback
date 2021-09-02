import React, { Component } from 'react';
import './FeedbackOptions.css';

class FeedbackOptions extends Component {
    render() {
        return (
            <div className="Button__container">
                {this.props.options.map(option => (
                    <button
                        className="Button"
                        onClick={this.props.onLeaveFeedback}
                        key={option}
                    >
                        {option}
                    </button>
                ))}
            </div>
        )
    }
}

export default FeedbackOptions;
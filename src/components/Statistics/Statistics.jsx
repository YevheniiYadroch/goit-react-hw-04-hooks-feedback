import React, { Component } from 'react';
import './Statistics.css';

class Statistics extends Component {
    render() {
        return(
            <div className="Statistics">
                <p>Good: {this.props.good }</p>
                <p>Neutral: {this.props.neutral }</p>
                <p>Bad: {this.props.bad }</p>
                <p>Total: {this.props.total }</p>
                <p>Positive feedback: {this.props.positivePercentage }%</p>
            </div>
        )
    }
}

export default Statistics;
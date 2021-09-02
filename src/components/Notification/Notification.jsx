import React, { Component } from 'react';
import './Notification.css';

class Notification extends Component {
    render() {
        return (
            <p className="Notification__content">{this.props.message}</p>
        )
    }
}

export default Notification;
import React from 'react';
import './Notification.css';

function Notification ({message}) {
        return (
            <p className="Notification__content">{message}</p>
        )
    
}

export default Notification;
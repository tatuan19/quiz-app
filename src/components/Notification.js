import React from 'react';

function Notification({ state }) {
    if (state.state) {
        return (
            <div class="notification is-info has-text-centered" style={{}}>
                <button class="delete"></button>
                <strong>{state.praise}</strong> Points <strong>{state.points}</strong>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default Notification;

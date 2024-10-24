import React from 'react';

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alertMsg && <div className={`alert alert-${props.alertMsg.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertMsg.type)}</strong> {props.alertMsg.msg}
        </div>
    );
}

export default Alert;

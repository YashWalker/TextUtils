import React from 'react'

function Alert(props) {
    const capitals=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitals(props.alert.type)}</strong>: {props.alert.msg}
                </div>
    )
}

export default Alert
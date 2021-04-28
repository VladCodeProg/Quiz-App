import React from 'react';
import './Button.scss';

const Button = props => {
    const type = props.type || 'primary'
    const cls = ['btn', 'btn-' + type]

    return (
        <button
            className={cls.join(' ')}
            onClick={props.onClick}
            disabled={props.disabled || false}
        >
            { props.children }
        </button>
    )
}

export default Button
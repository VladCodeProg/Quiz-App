import React from 'react';
import './Input.scss';

const isInvalid = ({valid, shouldValidate, touched}) => {
    return !valid && shouldValidate && touched;
}

const Input = props => {
    const {
        valid,
        shouldValidate,
        touched,
        label,
        errorMessage,
        type,
        value,
        onChange
    } = props
    const inputType = type || 'text';
    const htmlFor = `${inputType}-${Math.round(Math.random() * 100)}`;
    const cls = ['input']

    if (isInvalid({valid, shouldValidate, touched,})) {
        cls.push('invalid');
    }

    return (
        <div className={cls.join(' ')}>
            <label
                htmlFor={htmlFor}
                className="input-label"
            >{ label }</label>
            <input
                className="input-item"
                id={htmlFor}
                value={value}
                type={inputType}
                onChange={onChange}
            />

            { isInvalid({valid, shouldValidate, touched,})
                && (
                    <span className="input-error">
                        { errorMessage || 'Enter the correct value' }
                    </span>
                ) }
        </div>
    )
}

export default Input
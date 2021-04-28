import React from 'react';
import './Select.scss';

const Select = props => {
    const htmlFor = `${props.label}-${Math.round(Math.random() * 100)}`

    return (
        <div className="select">
            <label
                htmlFor={htmlFor}
                className="select-label"
            >{ props.label }</label>
            <select
                className="select-item"
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                { props.options.map((option, index) => {
                    return (
                        <option
                            value={option.value}
                            key={option.value + index}
                        >
                            { option.text }
                        </option>
                    )
                }) }
            </select>
        </div>
    )
}

export default Select
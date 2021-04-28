import React from 'react';
import './Loader.scss';

const Loader = props => {
    return (
        <div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Loader
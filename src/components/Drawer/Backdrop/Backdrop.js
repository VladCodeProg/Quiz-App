import React, { useRef } from 'react';
import './Backdrop.scss';
import { CSSTransition } from 'react-transition-group';

const Backdrop = props => {
    const nodeRef = useRef(null);

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={props.isOpened}
            classNames={{
                enter: 'backdrop-enter',
                enterActive: 'backdrop-active-enter',
                enterDone: 'backdrop-done-enter',
                exitActive: 'backdrop-active-exit'
            }}
            timeout={500}
            unmountOnExit
        >
            <div
                ref={nodeRef}
                className="backdrop"
                onClick={props.onBackdropClick}
            />
        </CSSTransition>
    )
}

export default Backdrop
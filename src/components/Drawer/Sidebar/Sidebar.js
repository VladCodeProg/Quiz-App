import React from 'react';
import './Sidebar.scss';
import Backdrop from '../Backdrop/Backdrop';
import { NavLink } from 'react-router-dom';

const links = [
    { label: 'Список тестов', to: '/', id: 1 },
    { label: 'Создать тест', to: '/quiz-creator', id: 2 }
];

const Sidebar = props => {
    const closeBtnCls = ['menu-toggle', 'fas'];
    const sidebarBtnCls = ['sidebar'];

    if (props.isOpened) {
        closeBtnCls.push('fa-times');
        sidebarBtnCls.push('sidebar-opened');
    } else {
        closeBtnCls.push('fa-bars');
        sidebarBtnCls.splice(1, 'sidebar-opened');
    }

    return (
        <>
            <Backdrop
                isOpened={props.isOpened}
                onBackdropClick={props.onBackdropClick}
            />
            <i
                className={closeBtnCls.join(' ')}
                onClick={props.openSidebar}
            />
            <div className={sidebarBtnCls.join(' ')}>
                <ul className="sidebar-list">
                    { links.map((link, index) => {
                        return (
                            <li
                                key={link.id}
                                className="sidebar-list-item"
                            >
                                <NavLink
                                    onClick={props.openSidebar}
                                    to={link.to}
                                >
                                    { link.label }
                                </NavLink>
                            </li>
                        )  
                    }) }
                </ul>
            </div>
        </>
    )
}

export default Sidebar
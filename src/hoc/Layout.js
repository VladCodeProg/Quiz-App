import React, { useState } from 'react';
import Sidebar from '../components/Drawer/Sidebar/Sidebar';
import './Layout.scss';

const Layout = props => {
    const [isOpened, setIsOpened] = useState(false);

    const openSidebar = () => setIsOpened(!isOpened);
    const onBackdropClick = () => setIsOpened(false);

    return (
        <main className="layout">
            <Sidebar
                isOpened={isOpened}
                openSidebar={openSidebar}
                onBackdropClick={onBackdropClick}
            />
            { props.children }
        </main>   
    )
}

export default Layout
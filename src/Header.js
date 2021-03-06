import React from 'react';
import './Header.css'
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Menu';
// import VideoCallIcon from '@material-ui/icons/Menu';
// import AppsIcon from '@material-ui/icons/Menu';
// import NotificationsIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* <MenuIcon /> */}
                <img class="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt="" />
            </div>
            
            <div className="header__input">
            <input placeholder="Search" type="text" />
            {/* <SearchIcon className="header__inputButton"/> */}
            </div>
            
            <div className="header__icons">
            {/* <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon" /> */}
            {/* <Avatar
                alt=""
                src=""
                /> */}
            </div>
            
        </div>
    )
}

export default Header

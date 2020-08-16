import React from "react";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

import './Header.css'
import {useStateValue} from "../../store/StateProvider";

const Header = () => {

    const [state] = useStateValue();

    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className='header_avatar'
                    alt={state.user?.displayName}
                    src={state.user?.photoURL}
                />
                <AccessTimeIcon/>
            </div>
            <div className="header_search">
                <SearchIcon/>
                <input type="text" placeholder={"Search User"}/>
            </div>
            <div className="header_right">
                <HelpOutlineIcon/>
            </div>
        </div>
    )
};

export default Header;
import React from 'react';
import classes from './Header.module.css';

import Description from './Description/Description'
import myself from '../../assets/avatar.'

const Header = () => {
    return (
        <div className={classes.HeaderContainer}>
            <img src={myself} className={classes.MyImg} alt="logo" />
            <Description />    
        </div>
    );
};

export default Header;
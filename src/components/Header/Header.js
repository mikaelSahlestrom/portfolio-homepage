import React from 'react';
import classes from './Header.module.css';

import Description from './Description/Description'
import myself from '../../assets/myself.svg'

const Header = () => {
    return (
        <div className={classes.Header}>
            <img src={myself} className={classes.MyImg} alt="logo" />
            <Description />    
        </div>
    );
};

export default Header;
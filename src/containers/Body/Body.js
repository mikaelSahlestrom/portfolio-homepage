import React, { Component } from 'react';
import classes from './Body.module.css';

class Body extends Component {
    render() {
        return (
            <div className={classes.Body}>
                This is my sexy body
            </div>
        );
    }
}

export default Body;
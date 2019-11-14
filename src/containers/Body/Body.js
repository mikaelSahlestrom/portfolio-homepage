import React, { Component } from 'react';
import classes from './Body.module.css';

class Body extends Component {
    state = {
        person:'mikael'
    }
    render() {
        console.log(this.state)
        return (
            <div className={classes.Body}>
                This is my sexy body
            </div>
        );
    }
}

export default Body;
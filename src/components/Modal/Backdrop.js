import React from 'react';
import classes from './Modal.module.css';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> :null
);

export default Backdrop;
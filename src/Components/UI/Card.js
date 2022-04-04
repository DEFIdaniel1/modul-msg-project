import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    //using className allows you to import the children's className attributes as props
    
    return (<div className={classes}>{props.children}</div>
    )};

export default Card;
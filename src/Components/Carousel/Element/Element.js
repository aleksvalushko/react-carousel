import React from "react";

import mod from './Element.module.css';

function Element(props) {

    let classes = props.newClassName ? `${mod.slide} ${mod.show}` : mod.slide;

    return (
        <div className={classes}>
            Slide{props.number}
        </div>
    );
}

export default Element;
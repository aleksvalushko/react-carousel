import React from "react";

import './Slide.sass';

let Slide = (props) => {

    let classes = props.newClassName === 'show' ? 'slide show' : 'slide';

    return (
        <div className={classes}>
            Slide{props.number}
        </div>
    );
}

export default Slide;
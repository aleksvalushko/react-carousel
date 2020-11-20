import React, { Component } from "react";

import mod from './Carousel.module.css';
import Element from "./Element/Element";

class Carousel extends Component {
    render() {
        return (
            <div className={mod.carousel}>
                <Element number='1' newClassName='show'/>
                <Element number='2'/>
                <Element number='3'/>
                <Element number='4'/>
                <Element number='5'/>
            </div>
        );
    }
}

export default Carousel;
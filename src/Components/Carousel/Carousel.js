import React, {useEffect, useState} from "react";

import './Carousel.sass';
import Slide from "./Slide/Slide";

let Carousel = () => {

    let [num, setNum] = useState(1);

    useEffect(() => {
        let carousel = setInterval(() => {
            if (num <= 5) {
                console.log(num);
                setNum(num++);
            } else {
                setNum(num = 1);
            }
        }, 1000);
        return () => clearInterval(carousel);
    }, []);

    return (
        <div className='carousel'>
            <Slide number='1' showClass='show'/>
            <Slide number='2' showClass={num === 2 ? 'show' : ''}/>
            <Slide number='3' showClass={num === 3 ? 'show' : ''}/>
            <Slide number='4' showClass={num === 4 ? 'show' : ''}/>
            <Slide number='5' showClass={num === 5 ? 'show' : ''}/>
        </div>
    );
}

export default Carousel;
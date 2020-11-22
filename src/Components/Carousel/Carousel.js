import React, {useEffect, useState} from "react";

import './Carousel.sass';
import Slide from "./Slide/Slide";

let Carousel = () => {

    let [num, setNum] = useState(1);

    useEffect(() => {
        let timer = setInterval(() => {
            if (num <= 5) {
                console.log(num);
                setNum(num++);
            } else {
                setNum(num = 1);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='carousel'>
            <Slide number='1' newClassName={num === 1 ? 'show' : ''}/>
            <Slide number='2' newClassName={num === 2 ? 'show' : ''}/>
            <Slide number='3' newClassName={num === 3 ? 'show' : ''}/>
            <Slide number='4' newClassName={num === 4 ? 'show' : ''}/>
            <Slide number='5' newClassName={num === 5 ? 'show' : ''}/>
        </div>
    );
}

export default Carousel;
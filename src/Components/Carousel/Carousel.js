import React, {useEffect, useState} from "react";

import './Carousel.sass';

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
            <div className='slide show'>Slide1</div>
            <div className={num === 2 ? 'slide show' : 'slide'}>Slide2</div>
            <div className={num === 3 ? 'slide show' : 'slide'}>Slide3</div>
            <div className={num === 4 ? 'slide show' : 'slide'}>Slide4</div>
            <div className={num === 5 ? 'slide show' : 'slide'}>Slide5</div>
        </div>
    );
}

export default Carousel;
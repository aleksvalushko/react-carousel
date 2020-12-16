import React, {useEffect, useState} from "react";

import './Carousel.sass';

let Carousel = () => {

    let [num, setNum] = useState(1);

    useEffect(() => {
        let timeout = setInterval(() => {
            if (num < 5) {
                setNum(++num);
            } else {
                setNum(num = 1);
            }
        }, 2000);
        return () => clearInterval(timeout);
    }, [num]);

    return (
        <div className='carousel'>
            <div className={num === 1 ? 'slide show' : 'slide'}>Slide1</div>
            <div className={num === 2 ? 'slide show' : 'slide'}>Slide2</div>
            <div className={num === 3 ? 'slide show' : 'slide'}>Slide3</div>
            <div className={num === 4 ? 'slide show' : 'slide'}>Slide4</div>
            <div className={num === 5 ? 'slide show' : 'slide'}>Slide5</div>
        </div>
    );
}

export default Carousel;
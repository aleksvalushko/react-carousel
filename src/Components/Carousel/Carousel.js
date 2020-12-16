import React, {useEffect, useState} from "react";
// import leftArrow from '../../img/left-arrow.svg'
// import rightArrow from '../../img/right-arrow.svg'

import './Carousel.sass';

let Carousel = () => {

    let [num, setNum] = useState(1);

    /*useEffect(() => {
        let timeout = setInterval(() => {
            if (num < 5) {
                setNum(++num);
            } else {
                setNum(num = 1);
            }
        }, 2000);
        return () => clearInterval(timeout);
    }, [num]);*/

    const nextSlide = () => {
        if(num < 5) {
            setNum(num + 1);
        } else {
            setNum(num = 1);
        }
    };

    const prevSlide = () => {
        if(num <= 1) {
            setNum(num = 5);
        } else {
            setNum(num - 1);
        }
    };

    return (
        <div className='carousel'>
            <button className='prev-btn' onClick={prevSlide}>prev</button>
            <button className='next-btn' onClick={nextSlide}>next</button>
            <div className='wrap'>
                <div className={num === 1 ? 'slide show' : 'slide'}>Slide1</div>
                <div className={num === 2 ? 'slide show' : 'slide'}>Slide2</div>
                <div className={num === 3 ? 'slide show' : 'slide'}>Slide3</div>
                <div className={num === 4 ? 'slide show' : 'slide'}>Slide4</div>
                <div className={num === 5 ? 'slide show' : 'slide'}>Slide5</div>
            </div>
        </div>
    );
}

export default Carousel;
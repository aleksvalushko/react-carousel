import React, {useState} from "react";
import leftArrow from '../../img/left-arrow.svg'
import rightArrow from '../../img/right-arrow.svg'

import './Carousel.sass';

let Carousel = () => {

    let [num, setNum] = useState(1);
    let [images, setImages] = useState([]);
    /*let [swiped, setSwiped] = useState(false);
    let [swipe, setSwipe] = useState({});
    let [minDistance, setMinDistance] = useState(50);*/

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

    const width = '100%';

    const nextSlide = () => {
        if (num < 5) {
            setNum(num + 1);
        } else {
            setNum(num = 1);
        }
    };

    const prevSlide = () => {
        if (num <= 1) {
            setNum(num = 5);
        } else {
            setNum(num - 1);
        }
    };

    /*function onTouchStart(event) {
        const touch = event.touches[0];
        swipe = {x: touch.clientX};
        setSwiped(false);
    }

    function onTouchMove(event) {
        if (event.changedTouches && event.changedTouches.length) {
            const touch = event.changedTouches[0];
            swipe.swiping = true;
        }
    }

    function onTouchEnd(event) {
        const touch = event.changedTouches[0];
        const absX = Math.abs(touch.clientX - swipe.x);
        if (swipe.swiping && absX > minDistance) {
            // props.onSwiped && props.onSwiped();
            setSwiped(true);
        }
        swipe = {};
    }*/

    return (
        <div className='carousel'>
            <button className='prev-btn' onClick={prevSlide}><img src={leftArrow} alt=""/></button>
            <button className='next-btn' onClick={nextSlide}><img src={rightArrow} alt=""/></button>
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
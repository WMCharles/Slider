import React, { useEffect, useState, useRef } from 'react'

export default function SlideShow() {
    const colors = ["#0088FE", "#00C49F", "#FFBB28"];
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)
    const sliderStyle = {
        transform: `translate3d(${-index * 100}%, 0, 0)`
    }
    const delay = 5000
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    useEffect(
        () => {
            resetTimeout();
            timeoutRef.current = setTimeout(
              () =>
                setIndex((prevIndex) =>
                  prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
              delay
            );
        
            return () => {
                resetTimeout();
            };
          }, [index]
        )
    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={sliderStyle}>
                {colors.map((color, index) => 
                    <div className="slide" key={index} style={{backgroundColor: color}}></div>
                )}
            </div>
            <div className='slideshowDots'>
                {colors.map((_, idx) => 
                    <div 
                        key={idx} 
                        className={`slideDot${index === idx ? " active" : ""}`}
                        onClick = {() => {setIndex(idx)}}
                    ></div>
                )}
            </div>
        </div>
        
    )
}

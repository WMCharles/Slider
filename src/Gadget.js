import React from 'react'

export default function Gadget() {
    const slides = [
        {
          url: "https://d-micheni.github.io/Gadget-Centre/assets/images/1a.jpg",
          text: "LAPTOP SALES"
        },
        {
          url:"https://d-micheni.github.io/Gadget-Centre/assets/images/2a.jpg",
          text: "PHONE SALES"
        },
        {
          url: "https://d-micheni.github.io/Gadget-Centre/assets/images/3a.jpg",
          text: "DESKTOP SALES"
        }
    ]

    const [index, setIndex] = React.useState(0);
    const delay = 5000;
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {
            resetTimeout();
        };
      }, [index]
    );
    
    return (
        <div className='slideshow-container'>
            <div className='mySlides' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                {slides.map((item, index) => 
                    <div key={index} className="slider">
                        <img src={item.url} alt="" style={{width: "100%"}}/>
                        <div className='text'>{item.text}</div>
                    </div> 
                )}                   
            </div>
            <div className="dots">
                {slides.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`dot${index === idx ? " active" : ""}`}
                    onClick={() => {setIndex(idx);}}
                    ></div>
            ))}
      </div>
        </div>
    )
}

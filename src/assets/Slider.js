import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Slider.css';


const slideImages = [
    'https://k.nooncdn.com/cms/pages/20210609/a7d2ffb734d8e81ca42bad398857e4f5/en_noon-slider-ENBD-01.png',
    'https://k.nooncdn.com/cms/pages/20210517/645b720c43c1602893e698b6fef28b7d/en_banner-01.png',
    'https://k.nooncdn.com/cms/pages/20210610/d981949dcd2f5c054ddef85cffa4525b/en_slider-04.png',
    'https://k.nooncdn.com/cms/pages/20210609/1b8255c3046068d1a7877d3a900ae0cf/en_banner-01.jpg'
  ];
  
  const Slideshow = () => {
      return (
        <div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                {/* <span>Slide 1</span> */}
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                {/* <span>Slide 2</span> */}
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                {/* <span>Slide 3</span> */}
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;
import React, { useState } from "react";
import Slider from "react-slick";
import './LunarCarousel.scss'; 
import FirstQuarter from '../assets/images/Moons/First quarter.png';
import FullMoon from '../assets/images/Moons/Full moon.png';
import LastQuarter from '../assets/images/Moons/Last quarter.png';
import NewMoon from '../assets/images/Moons/New Moon.png';
import WaningCrescent from '../assets/images/Moons/Waning crescent.png';
import WaningGibbous from '../assets/images/Moons/Waning gibbous.png';
import WaxingCrescent from '../assets/images/Moons/Waxing crescent.png';
import WaxingGibbous from '../assets/images/Moons/Waxing gibbous.png';

const LunarCalendar = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Stocker l'index de l'image active

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Montre trois images à la fois
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Active le mode centré
    centerPadding: "0px", // Évite les chevauchements sur les côtés
    className: "center",
    arrows: false, // Retirer les boutons de navigation
  };

  // Liste des images
  const images = [
    { src: FirstQuarter, alt: "First Quarter" },
    { src: FullMoon, alt: "Full Moon" },
    { src: LastQuarter, alt: "Last Quarter" },
    { src: NewMoon, alt: "New Moon" },
    { src: WaningCrescent, alt: "Waning Crescent" },
    { src: WaningGibbous, alt: "Waning Gibbous" },
    { src: WaxingCrescent, alt: "Waxing Crescent" },
    { src: WaxingGibbous, alt: "Waxing Gibbous" },
  ];

  return (
    <div className="lunar-calendar">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? "active" : ""}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LunarCalendar;

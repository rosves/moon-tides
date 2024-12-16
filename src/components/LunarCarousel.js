import React, { useState } from "react";
import Slider from "react-slick";
import "./LunarCarousel.scss";
import FirstQuarter from "../assets/images/Moons/First Quarter.png";
import FullMoon from "../assets/images/Moons/Full Moon.png";
import LastQuarter from "../assets/images/Moons/Last Quarter.png";
import NewMoon from "../assets/images/Moons/New Moon.png";
import WaningCrescent from "../assets/images/Moons/Waning Crescent.png";
import WaningGibbous from "../assets/images/Moons/Waning Gibbous.png";
import WaxingCrescent from "../assets/images/Moons/Waxing Crescent.png";
import WaxingGibbous from "../assets/images/Moons/Waxing Gibbous.png";
import LunarCalendar from "../pages/LunarCalendar";

const LunarCarousel = ({infos}) => {
  const [activeSlide, setActiveSlide] = useState(0); // Stocker l'index de l'image active

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,// Montre trois images à la fois
    slidesToScroll: 1, //Scroll une image
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: true, //Active le mode centré
    centerPadding: "0px", //Évite les chevauchements sur les côtés
    className: "center",
    arrows: false, // Retirer les boutons de navigation
  };

  const imagesMap = {
    FullMoon: FullMoon,
    FirstQuarter: FirstQuarter,
    LastQuarter: LastQuarter,
    NewMoon: NewMoon,
    WaningCrescent: WaningCrescent,
    WaningGibbous: WaningGibbous,
    WaxingCrescent: WaxingCrescent,
    WaxingGibbous: WaxingGibbous,
  };
 
console.log(infos)
  return (
    <div className="lunar-calendar">
    <Slider {...settings}>
      {infos.map((info, index) => {
      
       return <div className="img-container"
          key={index}>
          <img src={imagesMap[info.type]} alt={info.type} />
          <div className="text-container">
          <p>{info.date}</p>
          <h2>{info.type}</h2>
          <p>{info.description}</p>
          </div>
        </div>
      })}
    </Slider>
  </div>

  );
};

export default LunarCarousel;

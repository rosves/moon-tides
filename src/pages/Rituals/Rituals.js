import React from "react";
import Header2 from "../../components/Header2";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./Rituals.scss";
import Footer from "../../components/Footer";
import Instagram from "../../components/Instagram";

function Rituals() {
  return (
    // global container
    <div>
      <Header2 />
    {/* main container */}
      <div className="rituals_container">
{/* main title */}
        <h1 className="rituals_maintitle">
          <span>R</span>ituals
        </h1>
        {/* text / content */}
        <p className="message">
        Hello, beautiful souls 🌿, <br/><br/>

I’m so excited to share with you my curated recommendations for yoga and meditation videos! These practices have been such a transformative part of my own healing journey, helping me find balance, release tension, and reconnect with my true self. My hope is that these resources will guide you toward a deeper sense of peace, presence, and alignment in your own life.

Take your time, move with intention, and let these moments be a gift to yourself. Your body, mind, and spirit deserve this love.

<br/>With all my heart, <br/>
Hitomi
        </p>
      
      {/* boxes' container */}
      {/* meditation */}
      <section className="box_container">

        <section className="meditation_container">
          <h2>
            <span>M</span>editation
          </h2>
          <section className="box_row_container">
          <div className="meditation_box one">
            <p className="rituals_number">01</p>
            <p className="box_title">Hitomi's youtube videos</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="meditation_box two">
            <p className="rituals_number">02</p>
            <p className="box_title">Hitomi's favorites</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="meditation_box three">
            <p className="rituals_number">03</p>
            <p className="box_title">Meditation's tips</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div></section>
        </section>
        {/* yoga */}
        <section className="yoga_container" >
        <h2 className="yoga_title">
            <span>Y</span>oga
          </h2>
<section className="box_row_container">
          <div className="yoga_box one">
            <p className="rituals_number">01</p>
            <p className="box_title">Hitomi's youtube videos</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="yoga_box two">
            <p className="rituals_number">02</p>
            <p className="box_title">Hitomi's favorites</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div></section>

        </section>
      </section>
      <a href="/Affirmations" className="rituals_link"><p>Affirmations</p><Arrow className="affirmation_arrow"/></a></div>
      <Instagram />
      <Footer />
    </div>
  );
}

export default Rituals;

import React from "react";
import Header2 from "../components/Header2";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "./Rituals.scss";

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
        <p>
          Mes reco persos de medidations Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc accumsan ante in leo dapibus dapibus. Cras
          dictum egestas libero, eu tempus lectus finibus non. Cras dignissim
          ante vitae orci mollis malesuada. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Vivamus
          quis erat metus. Mes reco persos de medidations Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nunc accumsan ante in leo dapibus
          dapibus. Cras dictum egestas libero, eu tempus lectus finibus non.
          Cras dignissim ante vitae orci mollis malesuada. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Vivamus quis erat metus. Cras dictum egestas libero, eu
          tempus lectus finibus non. Cras dignissim ante vitae orci mollis
          malesuada. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Vivamus quis erat metus.
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
            <p>01</p>
            <p>Hitomi's youtube videos</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="meditation_box two">
            <p>02</p>
            <p>Hitomi's favorites</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="meditation_box three">
            <p>03</p>
            <p>Meditation's tips</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div></section>
        </section>
        {/* yoga */}
        <section className="yoga_container" >
        <h2>
            <span>Y</span>oga
          </h2>
<section className="box_row_container">
          <div className="yoga_box one">
            <p>01</p>
            <p>Hitomi's youtube videos</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div>

          <div className="yoga_box two">
            <p>02</p>
            <p>Hitomi's favorites</p>
            <div className="arrow">
              <Arrow />
            </div>
          </div></section>

        </section>
      </section>
      <a><p>Affirmations</p><Arrow/></a></div>
    </div>
  );
}

export default Rituals;

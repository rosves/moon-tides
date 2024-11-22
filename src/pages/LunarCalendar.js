import React from 'react';
import Header from '../components/Header';
import "./Home.scss";
import Practices from '../components/Practices';
import HitomiPlus from '../components/HitomiPlus';

function LunarCalendar() {
  return (
    <div>
      <Header/>
   {/* global */}
    <div className="home_container">
      {/* Moon section */}
      <section className="moon_snippet">Lunars</section>
      {/* End - Moon section */}
      {/* text part */}
      <h2>Full Moon</h2>
      <span>in virgo</span>
      <p className="moon_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ante in leo dapibus dapibus. Cras dictum egestas libero, eu tempus lectus finibus non. Cras dignissim ante vitae orci mollis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis erat metus. Aliquam vitae ex libero. Integer tristique lectus vitae interdum aliquam. Sed consequat malesuada finibus. Nam sit amet rutrum ante. Curabitur tempor ante quam, at tristique est fringilla nec. <br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ante in leo dapibus dapibus. Cras dictum egestas libero, eu tempus lectus finibus non. Cras dignissim ante vitae orci mollis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis erat metus. Aliquam vitae ex libero. Integer tristique lectus vitae interdum aliquam. Sed consequat malesuada finibus. Nam sit amet rutrum ante. Curabitur tempor ante quam, at tristique est fringilla nec.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ante in leo dapibus dapibus. Cras dictum egestas libero, eu tempus lectus finibus non. Cras dignissim ante vitae orci mollis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis erat metus. Aliquam vitae ex libero. Integer tristique lectus vitae interdum aliquam. Sed consequat malesuada finibus. Nam sit amet rutrum ante. Curabitur tempor ante quam, at tristique est fringilla nec.<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan ante in leo dapibus dapibus. Cras dictum egestas libero, eu tempus lectus finibus non. Cras dignissim ante vitae orci mollis malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus quis erat metus. Aliquam vitae ex libero. Integer tristique lectus vitae interdum aliquam. Sed consequat malesuada finibus. Nam sit amet rutrum ante. Curabitur tempor ante quam, at tristique est fringilla nec.<br/><br/>
      </p>
      
    </div>
  <Practices/>
  <HitomiPlus/>
    </div>
    // end
    );
}

export default LunarCalendar;

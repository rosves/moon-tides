import React from 'react';
import "./Affirmations.scss";
import HitomiPlus from "../../components/HitomiPlus";
import Header2 from '../../components/Header2';
import Instagram from '../../components/Instagram';
import Footer from '../../components/Footer';


function Affirmations() {
  return (
  <div>
    <Header2/>
    <article className='affirmation_container'>
    <h2>Today's affirmation...</h2>

  <h3><span>“</span><span>I</span> release all fear and doubt and trust in the universe to provide for me<span>”</span></h3>
  </article>
  <HitomiPlus/>
  <Instagram />
      <Footer />
  </div>
  )
}

export default Affirmations;

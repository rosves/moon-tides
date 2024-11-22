import React from 'react';
import "./Affirmations.scss";
import HitomiPlus from "../components/HitomiPlus";

function Affirmations() {
  return (
  <div>
    <article className='affirmation_container'>
  <h2>Today's affirmation...</h2>

  <h3><span>“</span><span>I</span> release all fear and doubt and trust in the universe to provide for me<span>”</span></h3>
  </article>
  <HitomiPlus/>
  </div>
  )
}

export default Affirmations;

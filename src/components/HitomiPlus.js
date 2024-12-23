import React from 'react';
import image from "../assets/images/Hitomi About.png";
import "./HitomiPlus.scss";

function HitomiPlus() {
  return (
    // Global container
    <div className='hitomiPlus_container'>
{/* Text & image + cta  */}
      <section>
        <p>Hitomi Mochizuki is a Japanese-American spiritual guide and content creator known for her holistic approach to wellness and personal growth. Drawing from her multicultural heritage and personal healing journey, she shares insights on spirituality, mental health, and eco-conscious living. Through her platforms, Hitomi promotes a lifestyle of mindfulness, self-care, and environmental respect, encouraging her followers to connect deeply with themselves and the world. Her influence extends to those seeking inner peace and holistic well-being, creating a supportive community around intentional and sustainable living.</p>
     <a href='/About'><button>Read more</button></a>
      </section>
      <img src={image} />
      {/* End - Text & image + cta */}
    </div>
    // End - Global container
  )
}

export default HitomiPlus;

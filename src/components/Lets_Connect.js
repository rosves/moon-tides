import React from 'react';
import image from "../assets/images/Hitomi About.png";
import "./HitomiPlus.scss";

function LetsConnect() {
  return (
    // Global container
    <div className='hitomiPlus_container'>
{/* Text & image + cta  */}
      <section>
        <p>
            <b>Dear Beautiful Souls,</b>
            <br/><br/>

I just wanted to take a moment to express my heartfelt gratitude for the love and support you've shown for my new app, Moon Tides. This journey of creating a space where we can all come together, connect with our inner selves, and flow with the rhythms of nature has been a dream come true—and it’s all because of you.
Moon Tides is more than just an app; it’s a sanctuary for healing, mindfulness, and intentional living. Knowing that so many of you resonate with this vision fills me with such joy and gratitude. Thank you for embracing this creation and trusting it to be a part of your own spiritual journey. Your kind words, feedback, and encouragement mean the world to me.
Together, let’s continue nurturing this space of love, self-discovery, and alignment with the earth and cosmos. I am so honored to be on this path with each of you.<br/>
With all my love and light,<br/><br/>
Hitomi
<br/><br/></p>
    <a href='https://www.instagram.com/yaknowme_hitomi/' target='blank_'> <button>Let's connect</button></a>
      </section>
      <img src={image}/>
      {/* End - Text & image + cta */}
    </div>
    // End - Global container
  )
}

export default LetsConnect;

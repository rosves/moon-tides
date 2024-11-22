import React from "react";
import "./About.scss";
import LetsConnect from "../components/Lets_Connect";
import Hitomi from "../assets/images/Hitomi_connect.png";

function About() {
  return (
    <div>
    {/* Global container */}
    <div className="Hitomi_container">
      <h2>
        <span>H</span>itomi <span>M</span>ochizuki
      </h2>
      <p>Content creator, Moon Tides’ Creator</p>
      <section className="content_container">
        <article>
          <p>
            Hitomi Mochizuki is a Japanese-American content creator and
            spiritual guide who has gained a large following through her gentle
            yet profound approach to wellness, spirituality, and mental health.
            Raised in a multicultural family with Japanese and Venezuelan roots,
            Hitomi’s life experiences have led her to develop a holistic
            philosophy that integrates mind, body, and spirit. 
            <br/><br/>
            Her content,
            shared primarily on YouTube and Instagram, documents her personal
            healing journey, touching on themes like mental health,
            eco-conscious living, veganism, and self-discovery. Hitomi openly
            discusses her struggles with anxiety and depression, and through her
            vulnerability, she encourages her followers to explore their inner
            selves with compassion and openness. 
            <br/><br/>
            In her holistic approach,
            Hitomi emphasizes the interconnectedness of mental, emotional, and
            physical wellness. For her, true healing requires tending to all
            parts of oneself—she combines mindfulness practices, like meditation
            and journaling, with sustainable, plant-based living. She believes
            that our mental health is linked to our relationship with the
            environment and that living mindfully extends to caring for the
            planet. Through her platforms, Hitomi creates a safe, supportive
            space for followers who seek a more balanced, intentional life. She
            inspires people to engage deeply with themselves, embracing a
            lifestyle that nurtures well-being and respects the earth. By
            blending personal insights with a holistic framework, Hitomi offers
            a model of healing that prioritizes self-care, spiritual connection,
            and conscious living.
          </p>
        </article>
        <section>
          <h2 className="about_title"><span>A</span>bout</h2>
          <img src={Hitomi} width="651" height="1002"/>
        </section>
      </section>
      
    </div> <LetsConnect/>
    </div>
  );
}

export default About;

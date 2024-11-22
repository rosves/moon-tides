import React from "react";
import "./Home.scss";
import Articles from "../components/Articles";
import HitomiPlus from "../components/HitomiPlus";

function Home() {
  return (
    <div>
   {/* global */}
    <div className="home_container">
      {/* Moon section */}
      <section className="moon_snippet">Lunars</section>
      {/* End - Moon section */}
      {/* text part */}
      <h2>Full Moon</h2>
      <span>in virgo</span>
      <p className="moon_text">
        la pleine lune en Vierge, c’est un moment particulier où les énergies de
        ce signe de terre viennent éclairer nos vies de manière précise et
        pragmatique. La Vierge est gouvernée par Mercure, la planète de
        l’intellect et de la communication, ce qui en fait une pleine lune axée
        sur la réflexion, l’analyse et l’amélioration. <br /><br />
        Lorsque la lune brille dans le signe de la Vierge, elle nous pousse à
        revisiter nos routines, à organiser nos pensées et notre espace, et à
        mettre de l’ordre dans le chaos de la vie quotidienne. C’est une période
        idéale pour faire le point sur ce qui fonctionne et ce qui ne fonctionne
        plus, tant sur le plan matériel que mental. C’est un peu comme une
        "grande révision" cosmique de nos habitudes, notre travail, et même
        notre bien-être physique.
      </p>
      <button>Read more</button>
      
    </div>
    <Articles/>
      <HitomiPlus/>
    </div>
    // end
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Home.scss";
import Practices from "../components/Practices";
import HitomiPlus from "../components/HitomiPlus";
import LunarCarousel from "../components/LunarCarousel";
import Instagram from "../components/Instagram";
import Footer from "../components/Footer";

function LunarCalendar() {
  const [moonPhase, setmoonPhase] = useState([]);
  const [moonPeriod, setmoonPeriod] = useState([]);
  const [MoonCarousel, setMoonCarousel] = useState([]);

  // Fonction pour appeler l'API locale et récupérer les phases lunaires
  async function LunarPhaseResquest() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/calendar", {
        method: "GET",
      });
      if (response.ok) {
        return await response.json(); // Retourne les données si la requête réussit
      }
    } catch (error) {
      console.log("Error in the route to Lunar Phase"); // Message d'erreur en cas d'échec
    }
  }

  // Fonction pour appeler une API externe et récupérer des informations sur les phases de la Lune
  async function MoonPhaseApiResquest() {
    const headers = new Headers({
      Authorization: "Basic " + btoa("me_victoire_lytween:ts2GG1Ie78"),
    });

    try {
      const response = await fetch(
        `https://api.meteomatics.com/2024-12-17T00:00:00ZP30D:P1D/moon_phase:idx/50,10/json`,
        { method: "GET", headers: headers }
      );
      if (response.ok) {
        return await response.json(); // Retourne les données si la requête échoue avec un statut valide
      }
    } catch (error) {
      console.log("Error in the route to Moon Phase API"); // Message d'erreur en cas d'échec
    }
  }

  // Utilisation de useEffect pour exécuter une action après le montage du composant
  useEffect(() => {
    async function fetchCalendar() {
      try {
        // Appelle les deux fonctions d'API et affiche les résultats dans la console
        const LunarData = await LunarPhaseResquest();
        const MoonPhaseApiData = await MoonPhaseApiResquest();
        console.log(LunarData, MoonPhaseApiData); // Debugging : Affiche les données
        setmoonPeriod(MoonPhaseApiData.data[0].coordinates[0].dates);
        setmoonPhase(LunarData.lunar);
      } catch (error) {
        console.log("Error fetching calendar data"); // Message d'erreur générique
      }
    }
    fetchCalendar(); // Exécute la fonction au montage
  }, []);

 const MoonDataCarousel = [];

  moonPeriod.forEach((dates) => {


    let object = {};
 
    if ((dates.value > -1) && (dates.value < -0.5)) {
      // Wanning gibbous
      const WaningGibbous = moonPhase.find(
        (index) => index.phase_name == "Waning Gibbous"
      );
      let dateToUse = new Date(dates.date);
      
      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: WaningGibbous.phase_name.replace(' ', ''),
        description: WaningGibbous.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value = -0.5)) {
      // Last Quarter
      const LastQuarter = moonPhase.find(
        (index) => index.phase_name == "Last Quarter"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: LastQuarter.phase_name.replace(' ', ''),
        description: LastQuarter.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value > -0.5) && (dates.value < 0)) {
      // Waning crescent
      const WaningCrescent = moonPhase.find(
        (index) => index.phase_name == "Waning Crescent"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: WaningCrescent.phase_name.replace(' ', ''),
        description: WaningCrescent.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value = 0)) {
      // New moon
      const NewMoon = moonPhase.find((index) => index.phase_name == "New Moon");
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: NewMoon.phase_name.replace(' ', ''),
        description: NewMoon.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value > 0) && (dates.value < 0.5)) {
      // Waxing crescent
      const WaxingCrescent = moonPhase.find(
        (index) => index.phase_name == "Waxing Crescent"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: WaxingCrescent.phase_name.replace(' ', ''),
        description: WaxingCrescent.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value = 0.5)) {
      // First quarter
      const FirstQuarter = moonPhase.find(
        (index) => index.phase_name == "First Quarter"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: FirstQuarter.phase_name.replace(' ', ''),
        description: FirstQuarter.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value > 0.5) && (dates.value < 1)) {
      // Waxing gibbous
      const WaxingGibbous = moonPhase.find(
        (index) => index.phase_name == "Waxing Gibbous"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: WaxingGibbous.phase_name.replace(' ', ''),
        description: WaxingGibbous.description,
      };
      MoonDataCarousel.push(object);
    } else if ((dates.value = 1)) {
      //Full Moon
      const FullMoon = moonPhase.find(
        (index) => index.phase_name == "Full Moon"
      );
      let dateToUse = new Date(dates.date);

      object = {
        date: dateToUse.toLocaleDateString("en-US"),
        type: FullMoon.phase_name.replace(' ', ''),
        description: FullMoon.description,
      };
      MoonDataCarousel.push(object);
    }
  });
  // setMoonCarousel(MoonDataCarousel);

  console.log(MoonDataCarousel[3]);
console.log(moonPeriod)
  return (
    <div>
      <Header /> {/* Composant de l'en-tête */}
      {/* Conteneur principal */}
      <div className="home_container">
        {/* Section pour les informations lunaires */}
        <section className="moon_snippet">
          <LunarCarousel infos={MoonDataCarousel} />
        </section>
        
      </div>
      {/* Composant pour les pratiques */}
      <Practices />
      {/* Composant supplémentaire (HitomiPlus) */}
      <HitomiPlus />
      <Instagram />
      <Footer />
    </div>
    // Fin du composant
  );
}

export default LunarCalendar;

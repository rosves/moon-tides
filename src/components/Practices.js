import React from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "./Articles.scss";

function Practices() {
  return (
    // global container
    <div className="articles_container">
      {/* title */}
      <h2>
        <span>P</span>ractices
      </h2>
      {/* container - boxes */}
      <section className="practices_container">
        <div className="box rituals">
          <p>01</p>
          <div className="bottom_part">
            <a href="/Rituals"><span className="topic">rituals</span></a>
            <Arrow />
          </div>
        </div>

        <div className="box affirmations">
          <p>02</p>

          <div className="bottom_part">
            <a href="/Affirmations"><span className="topic">affirmations</span></a>
            <Arrow />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Practices;

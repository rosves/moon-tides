import React from "react";
import Header2 from "../components/Header2";
import Practices from "../components/Practices";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import "./Diary.scss";

function Diary() {
  return (
    <div>
      <Header2 />
      {/* main container */}
      <div className="diaryentries_container">
        <h1>
          <span>M</span>y Diary
        </h1>
        {/* controls buttons */}
        <div className="controls_container">
          <button>new entry</button>
          <button>customize</button></div>
          {/* entries */}
          <section className="entriesbox_container">
            <section className="row_container">
              <div className="entry_box">
                <button>X</button>
                <p>Q: How do I feel today ?</p>
                <div className="arrow">
                  
                  <Arrow />
                </div>
              </div>

              <div className="entry_box">
                <button>X</button>
                <p>Q: How do I feel today ?</p>
                <div className="arrow">
                  
                  <Arrow />
                </div>
              </div>

              <div className="entry_box">
                <button>X</button>
                <p>Q: How do I feel today ?</p>
                <div className="arrow">
                  
                  <Arrow />
                </div>
              </div>
            </section>
          </section>
        
      </div>
      <Practices />
    </div>
  );
}

export default Diary;

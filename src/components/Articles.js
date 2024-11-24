import React from "react";
import { ReactComponent as Arrow } from '../assets/arrow.svg';
import "./Articles.scss";


function Articles(){

    return(
        // global container
        <div className="articles_container">
            {/* title */}
            <h2><span>A</span>rticles</h2>
            {/* container - boxes */}
            <section>
                <div className="box a">
                    <p>01</p>
                    <Arrow className="arrow"/>
                </div>
                <div className="box b">
                    <p>02</p>
                    <Arrow className="arrow"/>
                </div>
                <div className="box c">
                    <p>03</p>
                    <Arrow className="arrow"/>
                </div>
            </section>
        </div>
    )
}

export default Articles;
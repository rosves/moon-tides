import React from "react";
import "./Footer.scss";
import image from "../assets/images/Hitomi Mochizuki (1) 1.png";
import { ReactComponent as Logo } from '../assets/Moon Tides.svg';
import { ReactComponent as Arrow } from '../assets/arrow.svg';

function Footer() {
  return (
    // Global container
    <div className="footer_container">
      {/* footer */}
      <footer>
        {/* container */}
        <section className="footer_links bona-nova-regular">
          {/* left side */}
          <section className="left">
            <a>
              <div>
                <p>Privacy </p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
            <a>
              <div>
                <p>About Hitomi</p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
          </section>
          {/* middle part */}
          <section className="mid"><a>
              <div>
                <p>Youtube</p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
            <a>
              <div>
                <p>Instagram</p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
            <a>
              <div>
                <p>Tiktok</p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
            <a>
              <div>
                <p>X (Twitter)</p><Arrow className="arrow" width="35" height="35" alt="Arrow icon"/>
              </div>
            </a>
            </section>
            {/* right side */}
          <section className="right"><img src={image} alt="Hitomi upside down"/></section>
        </section>
        {/* bottom part */}
        <div className="bottom">
        <Logo width="207" height="60" alt="Moon Tides Logo" />
          <p>© 2024, Moon Tides</p>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

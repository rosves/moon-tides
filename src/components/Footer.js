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
            <a href="/privacy" className="footer_link">
              <div>
                <p>Privacy</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
            <a href="/About" className="footer_link">
              <div>
                <p>About Hitomi</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
          </section>
          {/* middle part */}
          <section className="mid">
            <a href="https://www.youtube.com/@HitomiMochizuki222" target="_blank" rel="noopener noreferrer" className="footer_link">
              <div>
                <p>YouTube</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
            <a href="https://www.instagram.com/yaknowme_hitomi/" target="_blank" rel="noopener noreferrer" className="footer_link">
              <div>
                <p>Instagram</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer_link">
              <div>
                <p>TikTok</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
            <a href="https://x.com/yaknowme_hitomi?s=21&t=rnIUP8AIZTvVX7MIlw38Cg" target="_blank" rel="noopener noreferrer" className="footer_link">
              <div>
                <p>X (Twitter)</p>
                <Arrow className="arrow"  alt="Arrow icon" />
              </div>
            </a>
          </section>
          {/* right side */}
          <section className="right">
            <img src={image} alt="Hitomi upside down" />
          </section>
        </section>
        {/* bottom part */}
        <div className="bottom">
          <a href="#header_container"><Logo width="207" height="60" alt="Moon Tides Logo" className="logo"  /></a>
          <p>© 2024, Moon Tides</p>
          <div></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

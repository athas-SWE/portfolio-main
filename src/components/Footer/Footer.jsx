import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import { IconButton } from '@material-ui/core'
import { Facebook, LinkedIn, Instagram, GitHub } from "@material-ui/icons"



const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>mohamedinfath99@gmail.com</span> */}
        <div className="f-icons">
          <a href='https://www.facebook.com/mohamed.athasahamed/' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>

          <a href='www.linkedin.com/in/athas-ahamed-8433a517b' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>

          <a href='https://www.instagram.com/mohamedinfath99/' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>

          <a href='https://github.com/athas-SWE' target="_blank" rel="noopener noreferrer">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        </div>
        <div className="copy">
          <p>© 2022 All Rights Reserved by ARA Ahamed</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

import React, { useState } from "react";
import "./About1.css";

import About from "./About";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";

import rmap from "../../images/map.png";
import sdoge from "../../images/sworddoge.png";
import chest from "../../images/treas1.png";
import bgmap from "../../images/mapbg.png";

const About1 = () => {
  const [card, setCard] = useState(1);
  return (
    <div className="A1Super" id="about1">
      <div className="A1Container">
        <div className="A1Top">
          <img src={bgmap} />
          {card === 1 && <About />}
          {card === 2 && <Roadmap />}
          {card === 3 && <Tokenomics />}
        </div>
        <div className="A1Bottom">
          <div className="ACard">
            <img src={sdoge} onClick={() => setCard(1)} />
            <h2 onClick={() => setCard(1)}>About</h2>
          </div>
          <div className="ACard">
            <img src={rmap} onClick={() => setCard(2)} />
            <h2 onClick={() => setCard(2)}>Roadmap</h2>
          </div>
          <div className="ACard">
            <img src={chest} onClick={() => setCard(3)} />
            <h2 onClick={() => setCard(3)}>Tokenomics</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;

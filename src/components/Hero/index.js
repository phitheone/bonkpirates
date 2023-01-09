import React from "react";
import "./Hero.css";

import dc from "../../images/dogeP.png";
import logoB from "../../images/logoblack.png";

const Hero = () => {
  return (
    <div className="HeroSuper" id="hero">
      <div className="Herocontainer">
        <div className="HLeft">
          {/* <h1>Doges of the Caribbean</h1> */}
          <img src={logoB} />
          <h2>Raiding the DogeChain Network</h2>
          <p>
            Navigate safely through the tumultuous seas of the mysterious
            DogeChain!
            <br />
            <br />
            Come board our vessel and be part of our exclusive DAO with a full
            crew of seasoned salty Doges, barking at the dangers that the
            DogeChain bring and find huge treasures made of precious tokens...
            Yarrrrr!
          </p>
          <div className="HeroBtnContainer">
            <a href="https://dogeswap.org/#" target="_blank">
              <div className="HeroBtn">Doge Swap</div>
            </a>
            <a
              href="https://pandasale.finance/launchpad/0xd5C48B06E608620D059110353964b8543bDe0709/?chain=DOGECHAIN"
              target="_blank"
            >
              <div className="HeroBtn">Fairlaunch</div>
            </a>
          </div>
        </div>
        <div className="HRight">
          <img src={dc} />
        </div>
      </div>
    </div>
  );
};

export default Hero;

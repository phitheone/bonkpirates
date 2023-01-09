import React, { useState } from "react";
import "./Navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";

import logoD from "../../images/logotelegram.png";
import logoT from "../../images/twitter.svg";
import hamburger from "../../images/hamburger.png";
import close from "../../images/Jolly_Roger.png";
import logoW from "../../images/logowhite.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuImg, setMenuImg] = useState(hamburger);
  let navigate = useNavigate();

  function openMenu() {
    if (isMenuOpen) {
      setMenuImg(hamburger);
    } else {
      setMenuImg(close);
    }

    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="NavSuper">
      <div className="NavContainer">
        <div className="Logo">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            spy={true}
            exact="true"
            offset={-74}
          >
            <img src={logoW} />
          </Link>
        </div>
        {/* <div className="Links">
          <div className="NavLink">
            <Link
              to="about1"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Tokenomics</p>
            </Link>
          </div>
          <div className="NavLink">
            <Link
              to="about2"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>About Us</p>
            </Link>
          </div>
          <div className="NavLink">
            <Link
              to="faq"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <p>Roadmap</p>
            </Link>
          </div>
        </div> */}
        <div className="NavButtons">
          <a href="https://dogeswap.org/#" target="_blank">
            <div className="NavBuyBtn">Doge Swap</div>
          </a>
          <a
            href="https://pandasale.finance/launchpad/0xd5C48B06E608620D059110353964b8543bDe0709/?chain=DOGECHAIN"
            target="_blank"
          >
            <div className="NavBuyBtn">Fairlaunch</div>
          </a>
        </div>
        {/* <div
          className="UBtn"
          target="_blank"
          onClick={() => {
            navigate("/utilities");
          }}
        >
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p>UTILITIES</p>
          </a>
        </div> */}
        <div className="Wide Socials">
          <a href="https://t.me/dogesofthecaribbean" target="_blank">
            <img src={logoD} />
          </a>
          <a href="https://twitter.com/CaribbeanDoges" target="_blank">
            <img src={logoT} />
          </a>

          {/* <div className="MintBtn">
            <a href="https://dqw4w9wgxcq.projectzora.xyz/">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>MINT</p>
            </a>
          </div> */}
        </div>
        <div className="Movil">
          <button className="NavBtn" onClick={() => openMenu()}>
            <img src={menuImg} height="25" />
          </button>
        </div>
      </div>
      <div className={"NavPanel-" + (isMenuOpen ? "Open" : "Closed")}>
        <div className="PanelLinks">
          <div className="PLogo">
            <Link
              to="hero"
              smooth={true}
              duration={700}
              spy={true}
              exact="true"
              offset={-74}
            >
              <img src={logoW} />
            </Link>
          </div>
          <div className="PanelSocials">
            <a
              href="https://t.me/dogesofthecaribbean"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={logoD} height="40" />
            </a>
            <a
              href="https://twitter.com/CaribbeanDoges"
              target="_blank"
              onClick={() => openMenu()}
            >
              <img src={logoT} height="40" />
            </a>
          </div>
          <div className="PNavButtons">
            <a href="https://dogeswap.org/#" target="_blank">
              <div className="PNavBuyBtn">Doge Swap</div>
            </a>
            <a
              href="https://pandasale.finance/launchpad/0xd5C48B06E608620D059110353964b8543bDe0709/?chain=DOGECHAIN"
              target="_blank"
            >
              <div className="PNavBuyBtn">Fairlaunch</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

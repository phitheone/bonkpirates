import React from "react";
import "./Footer.css";
import logoD from "../../images/logotelegram.png";
import logoT from "../../images/twitter.svg";
import logoW from "../../images/logowhite.png";

const Footer = () => {
  return (
    <div className="FooterSuper">
      <div className="FooterContainer">
        <div className="FooterSocials">
          <a href="https://t.me/dogesofthecaribbean" target="_blank">
            <img src={logoD} height="40" />
          </a>
          <a href="https://twitter.com/CaribbeanDoges" target="_blank">
            <img src={logoT} height="40" />
          </a>
        </div>
        <div className="FooterLogo">
          <img src={logoW} />
        </div>

        <div className="FooterCR">
          <p>
            2022 &#169; Doges of the Caribbean Productions, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

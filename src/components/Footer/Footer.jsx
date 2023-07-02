import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Category</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrival</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
            consequatur beatae commodi quos illum id eius nihil ipsum molestiae
            repellendus necessitatibus rerum totam, voluptas, quasi rem iste
            libero facere voluptatem.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            optio odio in vitae. A at enim necessitatibus optio ratione
            accusamus iusto eveniet, dolorem fuga quis magnam, vero ullam
            quisquam ex.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <Link className="logo">
            <img src="\img\LIMZIHANLOGO.png" alt="logo" />
          </Link>
          <span className="copyright">
            ©Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

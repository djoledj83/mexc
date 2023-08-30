import React from "react";
import { ReactComponent as Logo } from "../../assets/logo_p.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        {/* <h1 className="gradient__text">
          Thanks for your attention, you also can see my work on other
          platforms.
        </h1> */}
      </div>
      {/* <div className="gpt3__footer-btn">
        <p>Behance</p>
        <p>Instagram</p>
        <p>Dribbble</p>
      </div> */}
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo img">
          <Logo fill="blue" width="40%" />
          <p>www.t4me.com</p>
        </div>
        {/* <div className="gpt3__footer-links_div">
          <h4>Social</h4>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Behance</p>
          <p>Dribbble</p>
        </div> */}
        {/* <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Instagram</p>
          <p>Linkedin</p>
          <p>Behance</p>
          <p>Dribbble</p>
        </div> */}
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Mexcglobal doo</p>
          <p>Tosin Bunar 179</p>
          <p><></>info@t-4.me</p>
          <p>Phone: +381 (0) </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        {/* <p> Mexci.rs Design All rights reserved.</p> */}
      </div>
    </div>
  );
};

export default Footer;

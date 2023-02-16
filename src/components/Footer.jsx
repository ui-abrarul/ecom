import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h1>LAMA.</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="social-container">
          <div className="social-icon" style={{ backgroundColor: "#3B5999" }}>
            <Facebook />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#E4405F" }}>
            <Instagram />
          </div>
          <div className="social-icon" style={{ backgroundColor: "#55ACEE" }}>
            <Twitter />
          </div>
        </div>
      </div>
      <div className="footer-center">
        <h3>Useful Links</h3>
        <ul className="list">
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className="footer-right">
        <h3>Contact</h3>
        <div className="contact-item">
          <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South
          Tobinchester 98336
        </div>
        <div className="contact-item">
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </div>
        <div className="contact-item">
          <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev
        </div>
        <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
      </div>
    </div>
  );
};

export default Footer;

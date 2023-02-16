import { Send } from "@mui/icons-material";
import React from "react";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1>Newsletter</h1>
      <p>Get timely updates from your favorite products.</p>
      <div className="input-container">
        <input placeholder="Your email" />
        <button>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;

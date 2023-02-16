import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-left">
          <span className="language">EN</span>
          <div className="header-left-items">
            <input />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </div>
        </div>
        <div className="header-center">
          <h1 className="logo">LAMA.</h1>
        </div>
        <div className="header-right">
          <div>Register</div>
          <div>Sign In</div>
          <div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

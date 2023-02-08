import React from "react";
import logo from "../assets/images/logo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="bedarbio kalendorius" className="logo" />
      <div>Bedarbio Kalendorius</div>
    </div>
  );
};

export default Logo;

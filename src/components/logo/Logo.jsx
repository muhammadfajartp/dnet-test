import React from "react";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo-dark.png";

const Logo = () => {
   return (
      <Navbar.Brand className="h-100 w-100">
         <img src={logo} alt="Logo" style={{ height: "auto", width: "120px" }} />
      </Navbar.Brand>
   );
};

export default Logo;

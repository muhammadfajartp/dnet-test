import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => {
   return (
      <>
         <Navbar.Toggle aria-controls="navbarScroll" />
         <Navbar.Collapse id="navbarScroll">
            <Nav className="p-10 ms-3 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
               <Link style={{ textDecoration: "none" }} to={`/`}>
                  <p className={`${styles.linkStyle} text-secondary mb-0 pt-2 px-2`}>Home</p>
               </Link>
               <Link style={{ textDecoration: "none" }} to={`/`}>
                  <p className={`${styles.linkStyle} text-secondary mb-0 pt-2 px-2`}>Promo</p>
               </Link>

               <Link style={{ textDecoration: "none" }} to={`/transaksi`}>
                  <p className={`${styles.linkStyle} text-secondary mb-0 pt-2 px-2`}>Transaksi</p>
               </Link>

               <div className=" d-sm-none flex-grow-1" id="tiga"></div>
            </Nav>
         </Navbar.Collapse>
      </>
   );
};

export default Navigation;

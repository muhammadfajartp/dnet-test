import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Logo from "../../components/logo/Logo";
import Navigation from "../../components/navigation/Navigation";
import Search from "../../components/search/Search";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.scss";
import { useSearchParams } from "react-router-dom";
import { MdMood, MdOutlineAccountCircle, MdOutlineSearch, MdOutlineShoppingBasket, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
   const { cart } = useContext(CartContext);
   const { theme, toggleTheme } = useContext(ThemeContext);

   useEffect(() => {
      if (theme === "DARK") {
         document.body.classList.add("dark-mode");
      } else {
         document.body.classList.remove("dark-mode");
      }
   }, [theme]);

   return (
      <Navbar bg="primary" variant="dark" expand="lg" className="position-fixed pt-2 d-flex align-items-center w-100 " style={{ height: "13vh", zIndex: "99" }}>
         <Container className="d-flex justify-content-center align-items-center ">
            <Row className="w-100 ">
               <Col className="d-flex justify-content-between">
                  <Link to={"/"}>
                     <Logo />
                  </Link>

                  <Navigation />
               </Col>
               <Col className="d-none d-md-flex justify-content-end align-items-center px-0">
                  <div className={styles.navbarLoginStyle} onClick={toggleTheme}>
                     <div className={styles.containerIcon}>{theme === "DARK" ? <MdSunny size={30} /> : <MdMood size={30} />}</div>
                     <div className={styles.containerIcon}>
                        <div className={styles.cartStyles}>
                           <p>{cart}</p>
                        </div>
                        <MdOutlineShoppingBasket size={30} />
                     </div>

                     <Link to={"/login"}>
                        <div className={styles.containerIcon}>
                           <MdOutlineAccountCircle size={30} />
                        </div>
                     </Link>
                  </div>
               </Col>
            </Row>
         </Container>
      </Navbar>
   );
};

export default Header;

import React, { useState } from "react";
import styles from "./FormStyle.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";
import Logo from "../../assets/images/logo-dark.png";
import FacebookLogo from "../../assets/images/facebook.png";
import GoogleLogo from "../../assets/images/google.png";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
   const [selectedForm, setSelected] = useState(true);
   const navigate = useNavigate();

   const utama = () => {
      navigate("/");
   };
   const changeForm = () => {
      setSelected(!selectedForm);
   };

   return (
      <div className={styles.containerLoginFormStyle}>
         <Link to={"/"}>
            <img src={Logo} />
         </Link>
         <div className={styles.loginTitleStyle}>
            <p>Koneksi Stabil Tanpa Batas</p>
            {selectedForm ? <p>Login to feel benefit</p> : <p>Register for free</p>}
         </div>
         {selectedForm ? (
            <form className={styles.loginFormStyle}>
               <input name="email" placeholder="email" type="email" required />
               <input name="password" placeholder="password" type="password" required />
               <div className={styles.containerBtnStyle}>
                  <button onClick={utama}>
                     Login
                     <MdKeyboardArrowRight className={styles.iconArrowLogin} />
                  </button>
                  <p>OR</p>
                  <img src={GoogleLogo} />
                  <img src={FacebookLogo} />
               </div>
            </form>
         ) : (
            <form className={styles.loginFormStyle}>
               <input name="email" placeholder="email" type="email" required />
               <input name="password" placeholder="password" type="password" required />
               <input name="confirm-password" placeholder="confirm password" type="password" required />
               <div className={styles.containerBtnStyle} style={{ position: "relative", bottom: "20px" }}>
                  <button>
                     Signup
                     <MdKeyboardArrowRight className={styles.iconArrowLogin} />
                  </button>
                  <p>OR</p>
                  <img src={GoogleLogo} />
                  <img src={FacebookLogo} />
               </div>
            </form>
         )}

         <p className={styles.loginBottom}>
            {selectedForm ? "Don't have an account please" : "Have an account please"}
            <span onClick={changeForm}>{selectedForm ? "Signup" : "Login"}</span>
         </p>
      </div>
   );
};

export default LoginForm;

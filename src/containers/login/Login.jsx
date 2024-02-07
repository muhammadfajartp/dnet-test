import React, { useState } from "react";
import styles from "./Login.module.scss";
import Logo from "../../assets/images/group.jpg";
const Login = ({ children }) => {
   return (
      <div className={styles.loginStyle}>
         <div className={styles.leftStyle}>
            <img src={Logo} />
         </div>
         <div className="px-5">{children}</div>
      </div>
   );
};

export default Login;

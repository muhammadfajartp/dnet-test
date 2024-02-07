import React, { useContext } from "react";
import styles from "./Info.module.scss";
import { MdAddCircleOutline, MdPhoneAndroid } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
const InfoPackage = ({ data }) => {
   const { theme } = useContext(ThemeContext);
   const { name, phone_number, email, packageactive, wallet } = data || {};
   return (
      <div className={`${styles.profileContainer} ${theme === "DARK" ? styles.darkMode : ""}`}>
         <div>
            <h5 className="mb-0">
               <MdPhoneAndroid size={20} /> <span>{phone_number}</span>
            </h5>
         </div>
         <div className={styles.profileItem}>
            <div>
               <small>Pulsa Anda</small>
               <h4>{wallet && wallet.pulsa}</h4>
            </div>
            <hr />
            <div>
               <small>Point</small>
               <h4>{wallet && wallet.poin} point</h4>
            </div>
            <hr />
            <div>
               <small>
                  Paket Aktif <span>Internet Sakti</span>
               </small>
               <h4>
                  {packageactive && packageactive.total} | {packageactive && packageactive.durasi}
               </h4>
            </div>
            <hr />
            <div className="text-center">
               <h4 className="mb-0">
                  <MdAddCircleOutline size={40} />
               </h4>
               <small>Top Up</small>
            </div>
         </div>
      </div>
   );
};

export default InfoPackage;

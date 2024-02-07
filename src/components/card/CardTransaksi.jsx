import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { MdToday, MdAccessTimeFilled, MdShareLocation, MdMoney } from "react-icons/md";
import { ThemeContext } from "../../context/ThemeContext";
const CardTransaksi = ({ data }) => {
   const { provider, package_name, total_price, validity, selected_package, purchase_date } = data || {};
   const { theme } = useContext(ThemeContext);
   return (
      <div className={`${styles.frameTransaksi} ${theme === "DARK" ? styles.darkMode : ""}`}>
         <div className={`${styles.boxTransaksi}`}>
            <div className={`${styles.contentTransaksi}`}>
               <span className={`${styles.contentTransaksiLeft}`}>
                  <MdToday className={`${styles.iconTransaksi}`} />
                  Tanggal
               </span>
               <span className={`${styles.contentTransaksiRight}`}>{data && purchase_date}</span>
            </div>
            <div className={`${styles.contentTransaksi}`}>
               <span className={`${styles.contentTransaksiLeft}`}>
                  <MdAccessTimeFilled className={`${styles.iconTransaksi}`} />
                  Provider
               </span>
               <span className={`${styles.contentTransaksiRight}`}>{data && provider}</span>
            </div>
            <div className={`${styles.contentTransaksi}`}>
               <span className={`${styles.contentTransaksiLeft}`}>
                  <MdAccessTimeFilled className={`${styles.iconTransaksi}`} />
                  Jenis Paket
               </span>
               <span className={`${styles.contentTransaksiRight}`}>{data && package_name}</span>
            </div>
            <div className={`${styles.contentTransaksi}`}>
               <span className={`${styles.contentTransaksiLeft}`}>
                  <MdShareLocation className={`${styles.iconTransaksi}`} />
                  Total Paket
               </span>
               <span className={`${styles.contentTransaksiRight}`}>
                  {data && selected_package} {data && validity}
               </span>
            </div>
            <div className={`${styles.contentTransaksi}`}>
               <span className={`${styles.contentTransaksiLeft}`}>
                  <MdMoney className={`${styles.iconTransaksi}`} />
                  Harga
               </span>
               <span className={`${styles.contentTransaksiRight}`}>{data && total_price}</span>
            </div>
         </div>
      </div>
   );
};

export default CardTransaksi;

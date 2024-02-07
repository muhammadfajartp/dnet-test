import React, { useContext } from "react";
import styles from "./Card.module.scss";
import { MdGrade, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

const CardUI = ({ data }) => {
   const { toggleCart } = useContext(CartContext);
   const { theme } = useContext(ThemeContext);
   const { name, totalpackage, price, validity, promo } = data || {};

   return (
      <div className={`${styles.cardContainer} ${theme === "DARK" ? styles.darkMode : ""}`}>
         {promo == true && (
            <div className={styles.cardPromo}>
               <p className="mb-0">Promo !!!</p>
            </div>
         )}
         <div className={styles.cardChart} onClick={toggleCart}>
            <MdShoppingBasket size={20} color="danger" />
         </div>
         <div className={styles.cardItem}>
            <div>
               <small>{data && name}</small>
               <h4>
                  {data && totalpackage} | {data && validity}
               </h4>
            </div>
            <hr />
            <div>
               <h4>Rp. {data && price}</h4>
            </div>
         </div>
      </div>
   );
};

export default CardUI;

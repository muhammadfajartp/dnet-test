import React, { useRef, useState } from "react";
import styles from "./Slider.module.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CardUI from "../../components/card/CardUI";

const CardSlider = ({ namaProvider, data }) => {
   const slide = useRef();

   const klik = (param) => {
      const x = slide.current;
      x.scrollLeft = x.scrollLeft + param;
   };

   return (
      <div className={styles.containerSlider}>
         <div className={styles.sliderTitle}>
            <p className="fs-4 text-secondary fw-bold">{namaProvider}</p>
         </div>
         <div className={styles.slider} ref={slide}>
            {data &&
               data.slice(0, 10).map((item, index) => (
                  <div key={index} className={styles.cardWrapper}>
                     <CardUI data={item} />
                  </div>
               ))}
         </div>
         <MdKeyboardArrowLeft size={40} color={"#393E46"} className={`${styles.arrowStyle} ${styles.left}`} onClick={() => klik(-590)} />
         <MdKeyboardArrowRight size={40} color={"#393E46"} className={`${styles.arrowStyle} ${styles.right}`} onClick={() => klik(590)} />
      </div>
   );
};

export default CardSlider;

import React, { useEffect, useState } from "react";
import styles from "./Slider.module.scss";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Slider = () => {
   const [index, setIndex] = useState(0);
   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };
   const data = ["https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg", "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"];
   return (
      <section id="hero" className="mt-5">
         <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={3000}>
            {data.map((item) => {
               return (
                  <Carousel.Item>
                     <Container className={`${styles.containerHero} text-justify`}>
                        <Row
                           style={{
                              backgroundImage: `url9(${item})`,
                              backgroundPosition: "top",
                              backgroundSize: "cover",
                           }}
                           className={`${styles.rowHero} align-items-sm-center align-items-end `}
                        ></Row>
                     </Container>
                  </Carousel.Item>
               );
            })}
         </Carousel>
      </section>
   );
};

export default Slider;

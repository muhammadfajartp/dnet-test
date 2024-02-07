import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Divider from "../../components/divider/Divider";
import Sitemap from "../../components/sitemap/Sitemap";

const Footer = () => {
   const Data = {
      Satu: ["FAQ", "Investors Relations", "Ways to watch", "Corporite Information", ""],
      Dua: ["Help Center", "Jobs", "Term of Us", "Contact Us"],
      Tiga: ["Account", "Gift Card", "Privacy", "Speed Test"],
      Empat: ["Media Center", "Buy Gift Card", "Cookie Preferences", "Legal Notices"],
   };
   return (
      <footer className="pt-5">
         <Container fluid className=" pt-5 bg-dark d-flex flex-column justify-content-center align-items-center">
            <Row className=" w-75">
               <Col>
                  <p className="text-light fw-semibold">Question ? call 0897-6520-9737</p>
               </Col>
            </Row>
            <Row className=" row-cols-2 row-cols-sm-4 g-3 w-75">
               <Col>
                  <Sitemap data={Data.Satu} />
               </Col>
               <Col>
                  <Sitemap data={Data.Dua} />
               </Col>
               <Col>
                  <Sitemap data={Data.Tiga} />
               </Col>
               <Col>
                  <Sitemap data={Data.Empat} />
               </Col>
            </Row>

            <Row className=" w-100 ">
               <Col>
                  <Divider />
               </Col>
            </Row>
         </Container>
      </footer>
   );
};

export default Footer;

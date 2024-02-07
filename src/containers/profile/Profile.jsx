import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import InfoPackage from "../../components/info/InfoProfile";
import styles from "./Profile.module.scss";
import avatar from "../../assets/images/avatardnet.png";

const Profile = ({ data }) => {
   const { name, phone_number, email, packageactive, wallet } = data || {};
   return (
      <Container className={`${styles.profileContainer}`}>
         <Row>
            <Col>
               <h1>
                  Selamat datang <span className="text-warning">{name}</span>{" "}
               </h1>
               <h1 className="fst-italic text-success">Beli Paket apa hari ini ?</h1>
            </Col>
            <Col>
               <InfoPackage data={data} />
            </Col>
         </Row>
         <Row>
            <Col>
               <Image src={avatar} />
            </Col>
         </Row>
      </Container>
   );
};
export default Profile;

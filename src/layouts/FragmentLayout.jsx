import React from "react";
import Header from "../containers/header/Header";
import Footer from "../containers/footer/Footer";
const FragmentLayout = ({ children }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
      </>
   );
};

export default FragmentLayout;

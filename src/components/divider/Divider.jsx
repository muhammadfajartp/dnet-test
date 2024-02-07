import React from "react";
const Divider = ({ color = "red", width = "3px" }) => {
   return <hr style={{ border: `${width} solid ${color}`, margin: "40px 0 0 0 " }} />;
};

export default Divider;

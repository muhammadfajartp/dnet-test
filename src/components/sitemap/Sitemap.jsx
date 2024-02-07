import React from "react";
import styles from "./Sitemap.module.scss";

const Sitemap = ({ data, text = "" }) => {
   return (
      <div className="d-flex flex-column lh-base">
         <p className="text-light">{text}</p>
         <ul className={`${styles.sitemapUI} lh-lg`}>
            {data.map((e, index) => {
               return (
                  <li key={index} className="py-2">
                     <a href={null} className="fw-light">
                        {e}
                     </a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
};

export default Sitemap;

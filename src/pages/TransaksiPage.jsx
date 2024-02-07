import React, { useEffect, useState } from "react";
import FragmentLayout from "../layouts/FragmentLayout";
import { transaksiApi } from "../api/ISP";
import CardTransaksi from "../components/card/CardTransaksi";

const TransaksiPage = () => {
   const [transaksi, setTransaksi] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         try {
            const responseTransaksi = await transaksiApi().get();
            setTransaksi(responseTransaksi.data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };
      fetchApi();
   }, []);

   return (
      <>
         <FragmentLayout>
            <div className="px-5" style={{ paddingTop: "60px" }}>
               {transaksi.slice(0, 4).map((datanya) => {
                  return <CardTransaksi data={datanya} />;
               })}
            </div>
         </FragmentLayout>
      </>
   );
};

export default TransaksiPage;

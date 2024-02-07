import React, { useEffect, useState } from "react";
import FragmentLayout from "../layouts/FragmentLayout";
import CardSlider from "../containers/slider/CardSlider";
import { profilApi, providerApi, transaksiApi } from "../api/ISP";
import Profile from "../containers/profile/Profile";

const HomePage = () => {
   const [profil, setProfil] = useState([]);
   const [provider, setProvider] = useState([]);

   useEffect(() => {
      const fetchApi = async () => {
         try {
            const responseProfil = await profilApi().get();
            const responseProvider = await providerApi().get();
            const responseTransaksi = await transaksiApi().get();
            setProfil(responseProfil.data);
            setProvider(responseProvider.data);
         } catch (error) {
            console.error("Error fetching data:", error);
         }
      };
      fetchApi();
   }, []);

   return (
      <>
         <FragmentLayout>
            {console.log(provider.telkomsel)}
            <Profile data={profil} />
            <CardSlider data={provider.telkomsel} namaProvider={"Telkomsel"} />
            <CardSlider data={provider.xl} namaProvider={"XL"} />
            <CardSlider data={provider.smartfren} namaProvider={"Smartfren"} />
         </FragmentLayout>
      </>
   );
};

export default HomePage;

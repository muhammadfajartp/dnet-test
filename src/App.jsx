import "./assets/scss/styles.scss";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import TransaksiPage from "./pages/TransaksiPage";

const App = () => {
   return (
      <>
         <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="transaksi" element={<TransaksiPage />} />
         </Routes>
         ;
      </>
   );
};

export default App;

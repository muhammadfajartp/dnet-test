import axios from "axios";

const BASE_URL = "http://localhost:3001/";

const createInstance = (url) => {
   return axios.create({ baseURL: `${BASE_URL}${url}` });
};

const profilApi = () => {
   return createInstance("profile");
};

const providerApi = () => {
   return createInstance("providers");
};

const transaksiApi = () => {
   return createInstance("transactions");
};

export { BASE_URL, profilApi, providerApi, transaksiApi };

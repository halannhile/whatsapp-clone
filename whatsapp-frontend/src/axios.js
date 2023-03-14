import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:9000',
    // baseURL: 'https://nhile-whatsapp-mern.netlify.app/',
});

export default instance;
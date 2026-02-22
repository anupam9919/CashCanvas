import axios from 'axios';

const backendUrl = axios.create({
    // baseURL: 'https://bankingapp-jpot.onrender.com/',
    baseURL: 'http://localhost:8080/',
})

export default backendUrl;
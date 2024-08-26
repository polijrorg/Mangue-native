import axios from 'axios';

const api = axios.create({ baseURL: 'https://mangue.polijrinternal.com/' });

export default api;

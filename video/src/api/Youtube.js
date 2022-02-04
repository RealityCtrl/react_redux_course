import axios from 'axios';
const KEY = 'AIzaSyAWA40cGpKVvcK8XKfNaUL7vYCeDug1ld4';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

const youtube = axios.create({
    baseURL: BASE_URL,
})

youtube.interceptors.request.use(config => {
    config.params = {
     key:KEY,
      ...config.params,
    };
    return config;
  });

export default youtube;

import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID ZuYTxmvhpb6Tt6tnzpO05CmExLgDA6grCyylbxep1n0'
    },
});
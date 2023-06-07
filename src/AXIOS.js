import axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:5001/tech-hive-cd5ea/us-central1'
});


export default instance;
import axios from 'axios'

var instance = axios.create(
    {   baseURL: 'http://localhost:3000/',
    timeout: 10000,
    }
)
instance.interceptors.request.use(
    config =>{
        if(config.method!='get'){
            config.data = JSON.stringify(config.data);
        }
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        return config;
    },
    error =>{
        return Promise.reject(error)
    }
)

export default instance;

import axios from 'axios'


const axiosStantce = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
    }
})

export default{
    post(url,data){
        return axiosStantce.post(url,data)
    },
    get(url){
        return axiosStantce.get(url)
    }
}
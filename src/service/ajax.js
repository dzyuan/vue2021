import axios from 'axios'
// import store from '../store'

const axiosStantce = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true,
    headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
        'authorization':'authorization '+localStorage.getItem("token")
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
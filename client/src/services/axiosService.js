import axios from 'axios'
import Cookies from 'js-cookie'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
  }
})

axiosInstance.interceptors.request.use(function(config) {
  config.headers.authorization = Cookies.get('token');
  return config;
})


export const signup = async(name, username, password, age, address, phone, role, recordId, license) => {
  const res = await axiosInstance.post('user/signup', {username, name, password, age, address, phone, role, recordId, license})
  try {
    return res;
  } catch (err) {
    return res;
  }
}

export const signin = async( username, password, role) => {
  const res = await axiosInstance.post(`user/signin`, {username, password, role})

  try {
    return res;
  } catch(err) {
    return res;
  }
}
export const bookAppointment = async( date, time, problem) => {
  const res = await axiosInstance.post(`user/book`, {date, time, problem})
  try {
    return res;
  } catch(err) {
    return res;
  }
}


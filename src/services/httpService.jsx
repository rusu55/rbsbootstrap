import axios from 'axios'
import {toastr} from 'react-redux-toastr'

axios.interceptors.response.use(null, error =>{
    const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (expectedError) {
    //logger.log(error);
    toastr.error("An unexpected error occurrred.");
  }

  return Promise.reject(error)
})

export function setHeaderJWT(jwt){
  
  if(jwt) {
    return axios.defaults.headers.common["x-auth-token"] = jwt
  }
  else {
    return null
  }
    
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setHeaderJWT
}
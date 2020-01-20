import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
  //  baseURL: '' 
});
 
 

export const authAPI = {
   /*  me() {
        return instance.get(`auth/me`);
    }, */
    login(email, password, rememberMe = false) {
     //   return instance.post(`auth/login`, { email, password, rememberMe }); 
	localStorage.setItem('jwt', '86fasfgfsogHGad');
	//return;
    },
    logout() {
     //   return instance.delete(`auth/login`);
    }
}



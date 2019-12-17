import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR,AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import decodeJwt from 'jwt-decode';
import { adminReducer } from 'ra-core';
import bodyParser from 'body-parser';

//const API_URL_LOGIN = 'http://127.0.0.1:5000/api/user/login'; 
const API_URL_LOGIN = '//polar-stream-82449.herokuapp.com/api/user/login';


export default (type, params) => {
    if (type === AUTH_LOGIN) {
      
        const { username, password } = params;
       
        const rol=3;
        const apiToken=-1;
        const request = new Request(API_URL_LOGIN, {
            method: 'POST',
            body:JSON.stringify({ "mail": username, "pass": password,"rol":3, "idToken":"-1"}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
            mode:'cors'
        })
      
      
        return fetch(request)
       
            .then(response => {
                if (response.status <200 || response.status >= 300) {
                    console.log(response)
                  throw new Error(response.message);
                }
                console.log(response)
                return response.json();
             
            
            })
            
            
            .then(({ token }) => {
                localStorage.setItem('token', token);
                
            });
    
        }
        if (type === AUTH_LOGOUT) {
            localStorage.removeItem('token');

            return Promise.resolve();
        }
        if (type === AUTH_CHECK) {
            return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
        }
     
       if (type === AUTH_GET_PERMISSIONS) {
            return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
        }
        if (type === AUTH_ERROR) {
        const status  = params.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('token');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    return Promise.reject();
    
}

import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR,AUTH_CHECK, AUTH_GET_PERMISSIONS } from 'react-admin';
import decodeJwt from 'jwt-decode';
import { adminReducer } from 'ra-core';
import bodyParser from 'body-parser';

const API_URL_LOGIN = 'http://127.0.0.1:5000/api/user/login'; 


export default (type, params) => {
    if (type === AUTH_LOGIN) {
       
        //const { username, password } = params;
        const user='admin';
        const pass='admin';
        const rol=3;
        const apiToken=-1;
        const request = new Request(API_URL_LOGIN, {
            method: 'POST',
             //JSON.stringify({ user, pass , rol, apiToken}),
             body:JSON.stringify({ mail: 'admin', pass: 'admin',rol:3, idToken:-1}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
            mode:'no-cors'
        })
      
      
        return fetch(request)
       
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                  throw new Error(response.statusText);
                }
          
                return response.json();
            })
            
            
            .then(({ token }) => {
                localStorage.setItem('token', token);
                
            });
    
        }
    
    return Promise.resolve();
}

function Login(){
    fetch(API_URL_LOGIN, {
        method: 'POST', 
        body:JSON.stringify({ mail: 'admin', pass: 'admin',rol:3, idToken:0 }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
      
        })
        .then(response => response.json())
        .then(json => {
          console.log('parsed json', json) // access json.body here
        })
}
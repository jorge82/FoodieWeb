import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Bar, Line,Pie,Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


class Estadisticas_User extends React.Component {
    constructor() {
        super()
        Obtener_datos('user')
     
      }
 
    render(){
    return(
        null
    );
    }
} 

function Obtener_datos ( resource)  {
   
  const API_URL=`https://polar-stream-82449.herokuapp.com/api/${resource}`;
       
        const request = new Request(API_URL, {
            method: 'GET',
    
            headers: new Headers({ 'Content-Type': 'application/json' }),
    
        })
      
      
        return fetch(request)
       
            .then(response => {
                if (response.status <200 || response.status >= 300) {
                    console.log(response)
                  throw new Error(response.message);
                }
                return response.json();
             
          
            })
            
            
            .then(({ data }) => {
              //console.log(data)
                //localStorage.setItem(nombre_datos, data);
                //console.log(localStorage.getItem(nombre_datos))
                //console.log(data.length)
                //localStorage.setItem(nombre_datos, data);
                const num_usuarios= data.length;
                 const num_clientes= getCountUser(data, 0);
                 const num_deliveries= getCountUser(data, 1);
                 const num_administradores= getCountUser(data, 3);
                 const num_red_social= getCountRedSocial(data);
                 const num_no_red_social= getCountNoRedSocial(data, 3);
                 console.log(num_clientes)
                 console.log(num_deliveries)
                 console.log(num_administradores)
                 console.log(num_red_social)
                 console.log(num_no_red_social)
                 localStorage.setItem('total_usuarios', num_usuarios);
                 localStorage.setItem('total_clientes', num_clientes);
                 localStorage.setItem('total_administradores', num_administradores);
                 localStorage.setItem('total_deliveries', num_deliveries);
                 localStorage.setItem('total_red_social', num_red_social);
                 localStorage.setItem('total_no_red_social',num_no_red_social);

                
            });
    
        
    
    return Promise.resolve();
    
}
function getCountUser(obj, valor) {
  var count = 0;
  for (var i = 0; i < obj.length; i++) {
    //console.log(obj[i].rol)
      if (obj[i].rol === valor) {
          count++;
      }
  }
  return count;
}
function getCountRedSocial(obj) {
    var count = 0;
    for (var i = 0; i < obj.length; i++) {
      //console.log(obj[i].rol)
        if (obj[i].uidfirebase !=="-1") {
            count++;
        }
    }
    return count;
  }
  function getCountNoRedSocial(obj) {
    var count = 0;
    for (var i = 0; i < obj.length; i++) {
      //console.log(obj[i].rol)
        if (obj[i].uidfirebase ==="-1") {
            count++;
        }
    }
    return count;
  }
export default Estadisticas_User;
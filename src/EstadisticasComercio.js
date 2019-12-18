import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Bar, Line,Pie,Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


class Estadisticas_Comercio extends React.Component {
    constructor() {
        super()
        if(localStorage.getItem('token')!==null){
          Obtener_datos('comercio')
        }
     
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
    
            headers: new Headers({ 'Content-Type': 'application/json' ,'token':localStorage.getItem('token')}),
    
        })
      
      
        return fetch(request)
       
            .then(response => {
                if (response.status <200 || response.status >= 300) {
                    console.log(response)
                  throw new Error(response);
                }
                return response.json();
             
          
            })
            
            
            .then(({ data }) => {
              //console.log(data)
                //localStorage.setItem(nombre_datos, data);
                //console.log(localStorage.getItem(nombre_datos))
                //console.log(data.length)
                //localStorage.setItem(nombre_datos, data);
                const num_comercios= data.length;
                 
                 console.log(num_comercios)
                 
                 localStorage.setItem('total_comercios', num_comercios);
        

                
            });
    
        
    
    return Promise.resolve();
    
}
function getCountComercio(obj, valor) {
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
export default Estadisticas_Comercio;
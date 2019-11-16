import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Bar, Line,Pie,Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import 'chart.piecelabel.js';
import Estadisticas_User from './EstadisticasUsers';
import Estadisticas_Comercio from './EstadisticasComercio';
let  users=localStorage.getItem('total_usuarios');
let  clients=localStorage.getItem('total_clientes');
let  admins=localStorage.getItem('total_administradores');
let  deliveries=localStorage.getItem('total_deliveries');
let  social_users=localStorage.getItem('total_red_social');
let  no_social_users=localStorage.getItem('total_no_red_social');
let  comercios=localStorage.getItem('total_comercios');
const state = {
    labels: ['Num. usuarios', 'Num. clientes', 'Num. deliveries',
    'Num. administradores'],
    datasets: [
      {
        label:"Users",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [users, clients,deliveries,admins]
      }
    ]
  }
  const state_social = {
    labels: ['Num. usuarios reg. red social', 'Num. usuarios reg. no red social '],
    datasets: [
      {
        label:"Users",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        //backgroundColor: 'rgba(115,192,192,1)',
        borderColor: 'rgba(1,2,0,1)',
        borderWidth: 2,
        data: [social_users, no_social_users]
        
      }
    ]
  }
  const state_comercios= {
    labels: ['Num. comercios'],
    datasets: [
      {
        label:"Comercios",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        //backgroundColor: 'rgba(115,192,192,1)',
        borderColor: 'rgba(1,2,0,1)',
        borderWidth: 2,
        data: [comercios]
        
      }
    ]
  }

export default () => (


  
    <Card>
    <Estadisticas_User/> 
    <Estadisticas_Comercio/> 
     
     
        <CardHeader title="Foodie Dashboard" />
        <CardContent>KPI´s </CardContent>
       
        
      <Grid container spacing={24}>
          <Grid item xs={6}>
       <div style={{width: 400, height: 300}}>
     
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:"Users",
              fontSize:15          
            },
          ticks: {
            beginAtZero: true
            },
            
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]},
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
        </Grid>
        <Grid item xs={6}>
       <div style={{width: 400, height: 300}}>
     
        <Bar
          data={state_comercios}
          options={{
            title:{
              display:true,
              text:"Comercios",
              fontSize:15          
            },
          ticks: {
            beginAtZero: true
            },
            
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]},
            legend:{
              display:false,
              position:'right'
            }
          }}
        />
        </div>
        </Grid>
         
          <Grid item xs={6}>
        <div style={{width: 400, height: 300}}>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:state.title,
              fontSize:20
            },
            legend:{
              display:false,
              position:'false'
            }
          }}
        />
      </div>
      </Grid>
      </Grid>
      <Grid container spacing={24}>
          <Grid item xs={6}>
      <div style={{width: 400, height: 300, alignItems:'right'}} >
        <Pie
          data={state_social}
          options={{
            title:{
              display:true,
              text:"User Social Media",
              fontSize:20
            },pieceLabel: {
              render: 'value'
           },
            legend:{
              display:true,
              position:'right'
            },
            animation:{
              animateRotate:true
            }
          }}
        />
      </div>
      </Grid>
          <Grid item xs={6}>
          <div style={{width: 400, height: 300}} >
        <Doughnut
          data={state}
          options={{
            title:{
              display:true,
              text:state.title,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div >
      </Grid>
      
      </Grid>
    
    </Card>
  
);


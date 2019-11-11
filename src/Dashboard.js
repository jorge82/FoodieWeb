import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import {Bar, Line,Pie,Doughnut} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';
const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56]
      }
    ]
  }
export default () => (
    
    <Card>
        <CardHeader title="Foodie Dashboard" />
        <CardContent>Aca van algunos graficos... </CardContent>
      <Grid container spacing={24}>
          <Grid item xs={6}>
       <div style={{width: 400, height: 300}}>
        <Bar
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:15          
            },
            legend:{
              display:true,
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
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
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
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
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
              text:'Average Rainfall per month',
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
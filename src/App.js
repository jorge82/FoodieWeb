import './App.css';
import React, { Component } from 'react';
import './App.css';
import dataProvider from './dataProvider';
import { Redirect } from 'react-router-dom'
import { Admin, Login,Resource,sidebar, ListGuesser ,EditGuesser,fetchUtils} from 'react-admin';
//import { UserList } from './users';
import { UserList , UserCreate, UserEdit} from './user';
import {ComercioList, ComercioCreate, ComercioEdit} from './comercio';
import {PedidoList, PedidoCreate, PedidoEdit} from './pedido';
import jsonServerProvider from 'ra-data-json-server';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Shop from '@material-ui/icons/Shop';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import Dashboard from './Dashboard';

import authProvider from './authProvider';
import Background from './foodieback.png';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import color from '@material-ui/core/colors/indigo';


const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: localStorage.getItem('token')
  };
  return fetchUtils.fetchJson(url, options);
}
//const dataProvider = jsonServerProvider('https://polar-stream-82449.herokuapp.com/api');
const theme = createMuiTheme({
  palette: {
  
    primary: pink,
        secondary: green,
        error: red,
        contrastThreshold: 3,
   
        
        tonalOffset: 0.2,
  },
  
});


const MyLoginPage = () => <Login height="100%" backgroundImage={Background} />;



class App extends React.Component {
  
  render(){
    
  return(
    
  <Admin  dashboard={Dashboard} theme={theme} loginPage={MyLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
           <Resource name="user" list={UserList}  icon={UserIcon} create={UserCreate} edit={UserEdit} />
           <Resource name="comercio" list={ComercioList}   icon={Shop} create={ComercioCreate} edit={ComercioEdit}  />
           <Resource name="pedido" list={PedidoList}   icon={MotorcycleIcon}   />
        
      
      </Admin>
    

    
  );
  }
}

export default App;

import './App.css';
import React, { Component } from 'react';
import './App.css';
import dataProvider from './dataProvider';
import { Redirect } from 'react-router-dom'
import { Admin, Login,Resource,sidebar, ListGuesser ,EditGuesser,fetchUtils} from 'react-admin';
//import { UserList } from './users';
import { UserList } from './user';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostEdit, PostCreate } from './posts';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import Background from './foodieback.png';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import color from '@material-ui/core/colors/indigo';
//import simpleRestProvider from 'ra-data-simple-rest';
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  // add your own headers here
  options.headers.set('X-Custom-Header', 'foobar');
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
           
         <Resource  name="posts"  list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} /> 
        <Resource name="user" list={UserList} icon={UserIcon} />
      </Admin>
    

    
  );
  }
}
 
export default App;

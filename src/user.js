import React from 'react';

import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';
import MyUrlField from './MyUrlField';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="nombre" />
            <TextField source="pass" />
            <TextField source="mail" />
            <TextField source="rol" />
            <TextField source="puntaje" />
            <TextField source="nivel" />
            <TextField source="foto" />
            <TextField source="cantEnvios" />
            <TextField source="redsocial" />
            <TextField source="uidfirebase" />
            <TextField source="mail" />
          
          
            
        </Datagrid>
    </List>
);
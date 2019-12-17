import React from 'react';
import { List, Datagrid, TextField, ReferenceField ,EditButton,DeleteButton, ReferenceInput,
    SimpleForm,SelectInput, TextInput,DisabledInput,LongTextInput,
    Create, Edit,Filter} from 'react-admin';
import FirebaseAuthProvider from './FirebaseAuthProvider';


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
         
            <EditButton/>
            <DeleteButton/>
           
          
            
        </Datagrid>
    </List>
);

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Nombre" source="nombre" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const UserName = ({ record }) => {
       return <span>Post {record ? `"${record.nombre}"` : ''}</span>;
};
export const UserEdit = props => (
    <Edit title={<UserName />} {...props}>
        <SimpleForm>
        <DisabledInput source="id" />
           
            <TextInput source="nombre" />
            <TextInput source="pass" />
            <TextInput source="mail" />
            <TextInput source="rol" />
            <TextInput source="puntaje" />
            <TextInput source="nivel" />
            <TextInput source="foto" />
            <TextInput source="cantEnvios" />
            <TextInput source="redsocial" />
            <TextInput source="uidfirebase" />
       
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (

    

    <Create {...props}>
       
        
        <SimpleForm>
    

            <TextInput source="nombre" />
            <TextInput source="pass" />
            <TextInput source="mail" />
            <TextInput source="rol" />
            <TextInput source="puntaje" />
            <TextInput source="nivel" />
            <TextInput source="foto" />
            <TextInput source="cantEnvios" />
            <TextInput source="redsocial" />
            <TextInput source="uidfirebase" />
           
        
        </SimpleForm>
    </Create>
);

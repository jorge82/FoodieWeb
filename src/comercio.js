import React from 'react';

import { List, Datagrid, TextField, ReferenceField ,EditButton,DeleteButton, ReferenceInput,
    SimpleForm,SelectInput, TextInput,DisabledInput,LongTextInput,
    Create, Edit,Filter} from 'react-admin';

export const ComercioList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="com_id" />
            <TextField source="com_nombre" />
            <TextField source="com_direccion" />
            <TextField source="com_descripcion" />
            <TextField source="com_latitud" />
            <TextField source="com_longitud" />
            <TextField source="com_estado" />
            <EditButton/>
            <DeleteButton/>
        </Datagrid>
    </List>
);


const ComercioFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="Nombre" source="com_nombre" reference="comercio" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const ComercioName = ({ record }) => {
       return <span>Post {record ? `"${record.com_nombre}"` : ''}</span>;
};
export const ComercioEdit = props => (
    <Edit title={<ComercioName />} {...props}>
        <SimpleForm>
        <DisabledInput source="com_id" />
           
        <TextInput source="com_nombre" />
    
            <TextInput source="com_direccion" />
            <TextInput source="com_descripcion" />
            <TextInput source="com_latitud" />
            <TextInput source="com_longitud" />
            <TextInput source="com_estado" />
        </SimpleForm>
    </Edit>
);

export const ComercioCreate = props => (
    <Create {...props}>
        <SimpleForm>
    

        <TextInput source="com_nombre" />
    
    <TextInput source="com_direccion" />
    <TextInput source="com_descripcion" />
    <TextInput source="com_latitud" />
    <TextInput source="com_longitud" />
    <TextInput source="com_estado" />
        
        </SimpleForm>
    </Create>
);

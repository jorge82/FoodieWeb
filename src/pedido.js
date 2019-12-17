import React from 'react';

import { List, Datagrid, TextField,NumberField, ReferenceField ,EditButton,DeleteButton, ReferenceInput,
    SimpleForm,SelectInput, TextInput,DisabledInput,LongTextInput,NumberInput,
    Create, Edit,Filter} from 'react-admin';

export const PedidoList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="ped_id" />
        <TextField source="ped_descripcion" />
        <TextField source="ped_estado"/>
        <TextField source="ped_userid"/>
        <TextField source="ped_deliveryid" />
        <TextField source="ped_total"/>
        <TextField source="ped_envio"/>
        <TextField source="ped_direccioninicio" />
        <TextField source="ped_direcciondestino" />
        <TextField source="ped_longitudinicio" />
        <TextField source="ped_lqtitudinicio" />
        <TextField source="ped_longituddestino" />
        <TextField source="ped_latituddestino" />
     
        <DeleteButton/>
        </Datagrid>
    </List>
);


const PedidoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Buscar" source="q" alwaysOn />
        <ReferenceInput label="id" source="ped_id" reference="pedido" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

const PedidoName = ({ record }) => {
       return <span>Post {record ? `"${record.ped_id}"` : ''}</span>;
};
export const PedidoEdit = props => (
    <Edit title={<PedidoName />} {...props}>
        <SimpleForm>
        <DisabledInput source="ped_id" />
           
    
        <TextField source="ped_descripcion" />
        <TextField source="ped_estado"/>
        <DisabledInput source="ped_userid"/>
        <DisabledInput source="ped_deliveryid" />
        <NumberField source="ped_total" name="Total en pesos"/>
        <NumberField source="ped_envio"/>
        <TextField source="ped_direccioninicio" />
        <TextField source="ped_direcciondestino" />
        <NumberField source="ped_longitudinicio" />
        <NumberField source="ped_lqtitudinicio" />
        <NumberField source="ped_longituddestino" />
        <NumberField source="ped_latituddestino" />
        </SimpleForm>
    </Edit>
);
//falta crear pedido
export const PedidoCreate = props => (
    <Create {...props}>
        <SimpleForm>
    

     <TextInput source="nombre" />
    
    <TextInput source="direccion" />
    <TextInput source="descrip" />
    <NumberInput source="lat" />
    <NumberInput  source="long"/>
    <TextInput source="estado" />
        
        </SimpleForm>
    </Create>
);

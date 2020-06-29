import React from "react";
import { List, Datagrid,Button, Filter,EditButton,useNotify,useRefresh, TextField, TextInput, EmailField, ReferenceField } from "react-admin";
import IconEvent from '@material-ui/icons/Event';
import { changeUserStatus } from "../dashboard/operations";
const UserFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="customfilter" alwaysOn />
  </Filter>
);


const CustomButton = (props) => {
  const notify = useNotify();
  const refresh = useRefresh();
  return (
  <Button
  onClick={() => {
    if(window.confirm(`Are you sure you want to disable- ${props.record.username}`)){
     
      changeUserStatus(
        props.record
      )
        .then(data => {
          console.log(data);
          notify(props.record.active ? 'Disable Success' : 'Activated Sucess');
          refresh();
        })
        .catch(error =>{
          console.log(error);
          // this.props.notify(error.message)
          })
    }else{
      console.log('no');
    }
    
     }}
  
>
  
  <span style={{ fontSize: 10 }}>Status: {props.record.active ? ' Active': ' Disabled'}</span>
</Button>
)};

export const UserList = props => (
  <List title="Users" {...props} bulkActionButtons={false} perPage={100} filters={<UserFilter />}>
    <Datagrid  >
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="username" />
      <EmailField source="email" />
      <ReferenceField
        source="role"
        reference="sema/roles/admin/all"
        link={false}
      >
        <TextField source="authority" />
      </ReferenceField>

      <ReferenceField
        source="kiosk"
        reference="sema/kiosks/admin/all"
        link={false}
      >
        <TextField source="name" />
      </ReferenceField>
      <CustomButton/>
      <EditButton />
    </Datagrid>
  </List>
);

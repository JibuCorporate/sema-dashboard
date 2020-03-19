import React from "react";
import { List, Datagrid, Filter, TextField, BooleanInput, TextInput,  EmailField, ReferenceField } from "react-admin";

const UserFilter = (props) => (
  <Filter {...props}>
      <TextInput label="Search" source="username" alwaysOn />
  </Filter>
);


export const UserList = props => (
  <List title="Users" {...props} perPage={100} filters={<UserFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="username" />
      <EmailField source="email" />

      <ReferenceField
        source="role"
        reference="sema/roles/admin"
        link={false}
      >
        <TextField source="authority" />
      </ReferenceField>

      <ReferenceField
        source="kiosk"
        reference="sema/kiosks/admin"
        link={false}>
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

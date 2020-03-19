import React from "react";
import { List, Datagrid, TextField, EmailField, ReferenceField } from "react-admin";

export const UserList = props => (
  <List title="Users" {...props}>
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

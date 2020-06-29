import React from "react";
import { List, Datagrid, Filter, TextInput, TextField, DateField } from "react-admin";

const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="customfilter" alwaysOn />
  </Filter> 
);

export const KioskList = props => (
  <List title="Kiosks" {...props} bulkActionButtons={false} perPage={100} filters={<SearchFilter />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <DateField label="Created" source="created_at" />
    </Datagrid> 
  </List>
);

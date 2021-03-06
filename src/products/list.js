import React from "react";
import { List, Datagrid, TextField, ImageField  } from "react-admin";

export const ListProducts = props => (
  <List title="Products" {...props} perPage={100}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField label="Image"  source="base64Image" />
      <TextField source="description" />
      <TextField source="sku" />
      <TextField source="priceAmount" />
      <TextField source="priceCurrency" />
      <TextField source="unitMeasurement" />
    </Datagrid>
  </List>
);

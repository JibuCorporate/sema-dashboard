import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useShowController, ReferenceField, List, Filter, TextInput, Datagrid, TextField, ImageField } from "react-admin";

const PostPanel = ({ id, record, resource }) => (
  <Typography>
    {`Description - `}, {record.description}
    <br />
    {`Price Amount - `}, {record.priceAmount}
    <br />
    {`Price currency - `},{record.priceCurrency}
    <br />
    {`Units Per Product - `}, {record.unitsPerProduct}
    <br />
    {`Cost Of Goods - `}, {record.costOfGoods},
    <br /> {`SKU - `} ,{record.sku}
    <br />
    {`Min Quantity - `}, {record.minQuantity}
    <br />
    {`Max Quantity - `}, {record.maxQuantity}
    <br />
    {`Unit Measurement - `}, {record.unitMeasurement}
  </Typography>
);

const SearchFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="customfilter" alwaysOn />
  </Filter>
);

export const ListProducts = props => (
  <List title="Products" {...props} bulkActionButtons={false} perPage={100} filters={<SearchFilter />}>
    <Datagrid rowClick="edit" expand={<PostPanel />}>
      <TextField source="id" />
      <ImageField label="Image" source="base64Image" />


      <ReferenceField
        source="category"
        reference="sema/product_category/admin"
        link={false}
      >
        <TextField source="description" />
      </ReferenceField>

      {/* <TextField source="category" /> */}
      <TextField source="name" />
      {/* <TextField source="description" /> */}
      <TextField source="sku" />
      {/* <TextField source="priceAmount" />
      <TextField source="priceCurrency" />
      <TextField source="unitMeasurement" />
      <TextField source="minQuantity" />
      <TextField source="maxQuantity" />
      <TextField source="unitsPerProduct" />
      <TextField source="costOfGoods" /> */}


    </Datagrid>
  </List>
);

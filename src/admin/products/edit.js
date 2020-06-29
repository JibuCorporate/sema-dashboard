import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,SaveButton,
  DeleteButton,Toolbar,
  ImageField, AutocompleteInput, ReferenceInput
} from "react-admin";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
});
const CustomToolbar = props => (
  <Toolbar {...props} classes={useStyles()}>
      <SaveButton /> 
  </Toolbar>
);

export const EditProduct = props => {
  return (
    <Edit title="Edit Product" {...props}>
      <SimpleForm redirect={redirect} toolbar={<CustomToolbar />}>
        <ImageField label="Image" source="base64Image" />
        <TextInput source="base64Image" resettable />
        <TextInput source="name" />

        <ReferenceInput
        label="Category"
        source="category"
        reference="sema/product_category/admin"
      >
         <AutocompleteInput optionText="description" />
      </ReferenceInput> 
        <TextInput source="description" />
        <TextInput source="sku" />
        <TextInput source="priceAmount" />
        <TextInput source="priceCurrency" />
        <TextInput source="unitMeasurement" />
        <TextInput source="minQuantity" />
        <TextInput source="maxQuantity" />
        <TextInput source="unitsPerProduct" />
        <TextInput source="costOfGoods" />
      </SimpleForm>
    </Edit>
  );
};

const redirect = (_basePath, id) => `/sema/products/admin`;

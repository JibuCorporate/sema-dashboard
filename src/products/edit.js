import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField
} from "react-admin";
export const EditProduct = props => {
  return (
    <Edit title="Edit Product" {...props}>
      <SimpleForm redirect={redirect}>
        <ImageField label="Image" source="base64Image" />
        <TextInput source="description" />
        <TextInput source="sku" />
        <TextInput source="priceAmount" />
        <TextInput source="priceCurrency" />
        <TextInput source="unitMeasurement" />
      </SimpleForm>
    </Edit>
  );
};

const redirect = (_basePath, id) => `sema/products/admin`;

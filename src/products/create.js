import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField
} from "react-admin";

export const CreateProduct = props => {
  return (
    <Create title="Create Product" {...props}>
      <SimpleForm redirect={redirect}>

        <ImageInput source="base64Image" label="Related pictures" >
          <ImageInput label="Image" source="base64Image" />
        </ImageInput>
        <TextInput source="description" />
        <TextInput source="sku" />
        <TextInput source="priceAmount" />
        <TextInput source="priceCurrency" />
        <TextInput source="unitMeasurement" />
      </SimpleForm>
    </Create>
  );
};

const redirect = (_basePath, _id, data) => `sema/products/admin`;

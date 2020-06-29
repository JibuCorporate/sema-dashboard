import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField, AutocompleteInput, ReferenceInput
} from "react-admin";

export const CreateProduct = props => {
  return (
    <Create title="Create Product" {...props}>
      <SimpleForm redirect={redirect}>

        {/* <ImageInput source="base64Image" label="Related pictures" >
          <ImageInput label="Image" source="base64Image" />
        </ImageInput> */}
        <TextInput  source="base64Image" resettable />
        <TextInput source="name" />
        <ReferenceInput
        label="Category"
        source="category"
        reference="sema/product_category/admin"
      >
         <AutocompleteInput optionText="description" />
      </ReferenceInput>


        {/* <TextInput source="category" /> */}
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
    </Create>
  );
};

const redirect = (_basePath, _id, data) => `sema/products/admin`;

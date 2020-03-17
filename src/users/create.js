import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput
} from "react-admin";

export const UserCreate = props => (
  <Create title="Register User" {...props}>
    <SimpleForm redirect={redirect}>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="password" />
      <ReferenceInput
        label="Kiosk"
        source="kiosk"
        reference="sema/kiosks/admin"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="email" />

   


      <ReferenceInput
        label="Role"
        source="role"
        reference="sema/roles/admin"
      >
        <SelectInput optionText="authority" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const redirect = (_basePath, _id) => `/sema/users/admin`;

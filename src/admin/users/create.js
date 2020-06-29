import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
  AutocompleteInput
} from "react-admin";

export const UserCreate = props => (
  <Create title="Register User" {...props}>
    <SimpleForm redirect={redirect}>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="password" />
      <ReferenceInput
        label="Franchise"
        source="kiosk"
        reference="sema/kiosks/admin/all">
        <AutocompleteInput optionText="name" />
      </ReferenceInput>
      <TextInput source="email" />
      <ReferenceInput
        label="Role"
        source="role"
        reference="sema/roles/admin"
      >
         <AutocompleteInput optionText="authority" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

const redirect = (_basePath, _id) => `/sema/users/admin`;

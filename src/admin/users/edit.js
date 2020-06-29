import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  AutocompleteInput,
  ReferenceInput
} from "react-admin";

import { EditToolbar } from "../../elements/edit-toolbar";

export const UserEdit = props => (
  <Edit title="Edit User" {...props}>
    <SimpleForm toolbar={<EditToolbar />} redirect={redirect}>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="email" />

      <ReferenceInput
        label="Franchise"
        source="kiosk"
        reference="sema/kiosks/admin/all">
        <AutocompleteInput optionText="name" />
      </ReferenceInput>

      <ReferenceInput
        label="Role"
        source="role"
        reference="sema/roles/admin/all"
      >
         <AutocompleteInput optionText="authority" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

const redirect = (_basePath, _id) => `/sema/users/admin`;

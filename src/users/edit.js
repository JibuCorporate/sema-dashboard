import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput
} from "react-admin";

import { EditToolbar } from "../elements/edit-toolbar";

export const UserEdit = props => (
  <Edit title="Edit User" {...props}>
    <SimpleForm toolbar={<EditToolbar />} redirect={redirect}>
      <TextInput source="firstName" />
      <TextInput source="lastName" />
      <TextInput source="username" />
      <TextInput source="email" />

      <ReferenceInput
        label="Role"
        source="role"
        reference="sema/roles/admin"
      >
        <SelectInput optionText="authority" />
      </ReferenceInput>

      <ReferenceInput
        label="Kiosk"
        source="kiosk"
        reference="sema/kiosks/admin"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

const redirect = (_basePath, _id) => `/sema/users/admin`;

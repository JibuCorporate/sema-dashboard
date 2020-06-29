import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  TextField,SaveButton,
  DeleteButton,Toolbar,
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

export const Title = ({ record }) => <span>Kiosk #{record.id}</span>;

export const KioskEdit = props => (
  <Edit title={<Title />} {...props}>
    <SimpleForm redirect={redirect} toolbar={<CustomToolbar />}>
      <TextField source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

const redirect = (_basePath, id) => `sema/kiosks/admin`;

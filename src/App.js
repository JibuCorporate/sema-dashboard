import React from 'react';
import { Admin, Resource } from 'react-admin';
import admin from './admin';
import other from './other';

import dashboard from './admin/dashboard';
import CustomLoginPage from "./elements/login";
import { authProvider } from "./providers/auth";
import { client } from "./providers/client";
import { dataProvider } from "./providers";
import { realTimeProvider } from "./providers/realtime";

const App = () => (
   <Admin dashboard={dashboard}   
    authProvider={authProvider(client)}
    dataProvider={dataProvider}
    customSagas={[realTimeProvider]}
    loginPage={CustomLoginPage}
  >
    {user => {
      const resources = getResources(user);
      return Object.keys(resources).map(resourceName => {
        return <Resource {...resources[resourceName]} />;
      });
    }}

  </Admin>

);

function getResources(user) {
  console.log('user', user.role[0].code);
  if (user.role[0].code === "admin") {
    return admin;
  }

  if (user.role[0].code !== "admin") {
     return other
  }

}


export default App;
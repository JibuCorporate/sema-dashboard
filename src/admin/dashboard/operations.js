import { client } from "../../providers/client";

export function fetchOverviewStats() {
  return client
    .get(
      `/sema/overview`
    )
    .then(response => {
      console.log('response', response.data);
      return response.data;
    });
}


export function changeUserStatus(user) {
  return client
    .post(
      `/sema/users/admin/userStatus`,
      user
    )
    .then(response => {
      console.log('response', response.data);
      return response.data;
    });
}

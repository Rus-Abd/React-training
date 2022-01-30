import { gql } from '@apollo/client';
export const GET_ALL_USERS = gql`
  query {
    getAllUsers {
      id
      username
      age
    }
  }
`;
// getUser: ({ id }) => {
//     return users.find((user) => user.id == id);
//   }
export const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;

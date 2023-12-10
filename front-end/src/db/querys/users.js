import gql from "graphql-tag";
const GET_ALL_USERS = gql`
        query usersQuery {
            users {
              id
              name
              password
              email
          }
       }` 






export default GET_ALL_USERS;
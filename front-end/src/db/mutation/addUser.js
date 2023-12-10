import gql from "graphql-tag";

const ADD_USER = gql`
         mutation addUser($user: AddUserInput!) {
                addUser(user: $user) {
                    id
                    email
                    name
                    password
   }
 }

`;

export default ADD_USER;

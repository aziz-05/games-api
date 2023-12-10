import gql from "graphql-tag";
const GET_USER = gql`
        query userQuery($id: ID, $email: String) {
            user(id: $id, email: $email) {
                id
                name
                email
                password
            }
        }
` 






export default GET_USER;
import gql from "graphql-tag";
const DELETE_USER = gql`
        mutation deleteUser($id: ID, $name: String) {
            deleteUser(id: $id, title: $name) {
                id
                name
            }
            }

` 




export default DELETE_USER;
import gql from "graphql-tag";
const UPDATE_USER = gql`
        mutation updateUser($id: ID!, $edits: EditUserInput!) {
            updateUser(id: $id, edits: $edits) {
                id
                title
                platform
  }
}

` 




export default UPDATE_USER;
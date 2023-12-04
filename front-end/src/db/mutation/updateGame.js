import gql from "graphql-tag";
const UPDATE_GAME = gql`
        mutation updateGame($id: ID!, $edits: EditGameInput!) {
            updateGame(id: $id, edits: $edits) {
                id
                title
                platform
  }
}

` 




export default UPDATE_GAME;
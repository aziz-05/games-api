import gql from "graphql-tag";
const DELETE_GAME = gql`
        mutation deletGame($id: ID!) {
            deleteGame(id: $id) {
                id
            }
            }

` 




export default DELETE_GAME;
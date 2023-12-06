import gql from "graphql-tag";
const DELETE_GAME = gql`
        mutation deletGame($id: ID, $title: String) {
            deleteGame(id: $id, title: $title) {
                id
            }
            }

` 




export default DELETE_GAME;
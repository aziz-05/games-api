import gql from "graphql-tag";
const GET_GAME = gql`
        query gameQuery($id: ID!) {
            game(id: $id) {
                id
                title
                platform
                description
                version
                reviews {
                id
                rating
                content
                author {
                    id
                    name
                }
                }
            }
        }
` 






export default GET_GAME;
import gql from "graphql-tag";
const GET_ALL_GAMES = gql`
        query gamesQuery {
            games {
              id
              title
              platform
              description
              publishDay
              version
              reviews {
                id
                rating
                content
                game {
                  id
                  title
                }
                author {
                  id
                  name
                  verified
                }
             }
          }
       }` 






export default GET_ALL_GAMES;
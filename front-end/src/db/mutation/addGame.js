import gql from "graphql-tag";
const ADD_GAME = gql`
        mutation addGame($game: AddGameInput!) {
                addGame(game: $game) {
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
                        verified
      }
    }
  }
}

` 




export default ADD_GAME;
import gql from "graphql-tag";
const ADD_AUTHOR = gql`
        mutation addAuthor($author: AddAuthorInput!) {
  addAuthor(author: $author) {
    id
        name,
        verified
      }
    }

` 




export default ADD_AUTHOR;
import gql from "graphql-tag";
const ADD_REVIEW = gql`
        mutation addReview($review: AddReviewInput!) {
  addReview(review: $review) {
        id
        rating
        content
        
      }
    }

` 




export default ADD_REVIEW;
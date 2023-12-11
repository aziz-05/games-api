<template>
  <!-- Add Review Button -->
  <button class="action-button add-button" @click="toggleAddReviewInput">
    Add Review
  </button>
  <div v-if="showAddReviewInput" class="input-container">
    <input
      v-model="newReview.rating"
      class="input-field"
      type="number"
      placeholder="Rating (1-5)"
    />
    <textarea
      v-model="newReview.content"
      class="input-field"
      placeholder="Review Content"
    ></textarea>
    <textarea
      v-model="newReview.description"
      class="input-field"
      placeholder="Review description"
    ></textarea>
    <input
      v-model="newReview.authorId"
      class="input-field"
      type="number"
      placeholder="Author ID"
    />
    <input
      v-model="newReview.gameId"
      class="input-field"
      type="number"
      placeholder="Game ID"
    />
    <button class="save-button" @click="addReview">Save</button>
  </div>

  <!-- Delete Review Button -->
  <button class="action-button" @click="toggleDeleteReviewInput">
    Delete Review
  </button>
  <div v-if="showDeleteReviewInput" class="input-container">
    <input
      v-model="reviewIdToDelete"
      class="input-field"
      type="number"
      placeholder="Review ID"
    />
    <button class="delete-button" @click="deleteReview">Delete</button>
  </div>
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gqlAddReviewMutation from "../db/mutation/addReview";

export default {
  setup() {
    const { mutate: addnewReview } = useMutation(gqlAddReviewMutation);
    return {
      addnewReview,
    };
  },

  data() {
    return {
      showAddReviewInput: true,
      showDeleteReviewInput: false,
      newReview: {
        rating: null,
        content: "",
        description: "",
        authorId: null,
        gameId: null,
      },
      reviewIdToDelete: null,
    };
  },
  methods: {
    toggleAddReviewInput() {
      this.showAddReviewInput = !this.showAddReviewInput;
    },
    toggleDeleteReviewInput() {
      this.showDeleteReviewInput = !this.showDeleteReviewInput;
    },
    addReview() {
      // Implement logic to add review (use Vuex actions or API calls)
      //const { rating, gameId, authorId } = parseInt(this.newReview);
      this.addnewReview({ review: this.newReview });
      this.resetInputs();
    },
    deleteReview() {
      // Implement logic to delete review (use Vuex actions or API calls)
      this.resetInputs();
    },
    resetInputs() {
      this.newReview = {
        rating: null,
        content: "",
        authorId: null,
        gameId: null,
      };
      this.reviewIdToDelete = null;
    },
  },
};
</script>

<style scoped>
.action-button {
  margin-top: 10px;
  padding: 10px;
  width: 100%;
  background-color: rgb(210, 231, 210);
  color: rgb(75, 75, 75);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.action-button:hover {
  background-color: #9dd3a0;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.input-field {
  margin-top: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 200px;
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.input-field:focus {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  outline: none;
}

.save-button,
.delete-button {
  margin-top: 10px;
  padding: 10px;
  background-color: #2ecc71;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover,
.delete-button:hover,
.update-button:hover {
  background-color: #27ae60;
}
</style>

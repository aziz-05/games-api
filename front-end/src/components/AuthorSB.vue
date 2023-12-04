<template>
  <!-- Add Author Button -->
  <button class="action-button add-button" @click="toggleAddAuthorInput">
    Add Author
  </button>
  <div v-if="showAddAuthorInput" class="input-container">
    <input
      v-model="newAuthor.name"
      class="input-field"
      placeholder="Author Name"
    />
    <input
      v-model="newAuthor.verified"
      type="checkbox"
      class="input-checkbox"
      id="verifiedCheckbox"
    />
    <label for="verifiedCheckbox" class="checkbox-label">Verified</label>
    <button class="save-button" @click="addAuthor">Save</button>
  </div>

  <!-- Delete Author Button -->
  <button class="action-button" @click="toggleDeleteAuthorInput">
    Delete Author
  </button>
  <div v-if="showDeleteAuthorInput" class="input-container">
    <input
      v-model="authorIdToDelete"
      class="input-field"
      type="number"
      placeholder="Author ID"
    />
    <button class="delete-button" @click="deleteAuthor">Delete</button>
  </div>
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gqlAddAuthorMutation from "../db/mutation/addAuthor";
export default {
  setup() {
    const { mutate: addnewAuthor } = useMutation(gqlAddAuthorMutation);
    return {
      addnewAuthor,
    };
  },
  data() {
    return {
      showAddAuthorInput: true,
      showDeleteAuthorInput: false,
      newAuthor: {
        name: "",
        verified: false,
      },
      authorIdToDelete: null,
    };
  },
  methods: {
    toggleAddAuthorInput() {
      this.showAddAuthorInput = !this.showAddAuthorInput;
    },
    toggleDeleteAuthorInput() {
      this.showDeleteAuthorInput = !this.showDeleteAuthorInput;
    },
    addAuthor() {
      // Implement logic to add author (use Vuex actions or API calls)
      this.addnewAuthor({ author: this.newAuthor });
      this.resetInputs();
    },
    deleteAuthor() {
      // Implement logic to delete author (use Vuex actions or API calls)
      console.log("Deleting author with ID:", this.authorIdToDelete);
      this.resetInputs();
    },
    resetInputs() {
      this.newAuthor = { name: "", verified: false };
      this.authorIdToDelete = null;
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
  gap: 10px;
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
  border-color: #68ca78;
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

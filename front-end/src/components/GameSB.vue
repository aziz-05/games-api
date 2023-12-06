<template>
  <!-- Add Game Button -->
  <button class="action-button" @click="toggleAddGameInput">Add Game</button>
  <div v-if="showAddGameInput" class="input-container">
    <input v-model="newGame.title" class="input-field" placeholder="Title" />
    <input
      v-model="newGame.version"
      class="input-field"
      placeholder="Version"
    />
    <input
      v-model="newGame.description"
      class="input-field"
      placeholder="Description"
    />
    <input
      v-model="newGame.platform"
      class="input-field"
      placeholder="Platforms (comma-separated)"
    />
    <button class="save-button" @click="addGame">Save</button>
  </div>

  <!-- Delete Game Button -->
  <button class="action-button" @click="toggleDeleteGameInput">
    Delete Game
  </button>
  <div v-if="showDeleteGameInput" class="input-container">
    <input
      v-model="gameIdToDelete"
      class="input-field"
      type="number"
      placeholder="Game ID"
    />
    <input
      v-model="gameTitleToDelete"
      class="input-field"
      type="title"
      placeholder="Game Title"
    />
    <button class="delete-button" @click="deleteGame">Delete</button>
  </div>

  <!-- Update Game Button -->
  <button class="action-button" @click="toggleUpdateGameInput">
    Update Game
  </button>
  <div v-if="showUpdateGameInput" class="input-container">
    <input
      v-model="updatedGameid"
      class="input-field"
      type="number"
      placeholder="Game ID"
    />
    <input
      v-model="updatedGame.title"
      class="input-field"
      placeholder="New Title"
    />
    <input
      v-model="updatedGame.version"
      class="input-field"
      placeholder="New Version"
    />
    <input
      v-model="updatedGame.description"
      class="input-field"
      placeholder="New Description"
    />
    <input
      v-model="updatedGame.platform"
      class="input-field"
      placeholder="New Platforms (comma-separated)"
    />
    <button class="update-button" @click="updateGame">Update</button>
  </div>
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gqlAddGAmeMutation from "../db/mutation/addGame";
import gqldeleteGAmeMutation from "../db/mutation/deleteGame";
import gqlupdateGAmeMutation from "../db/mutation/updateGame";

export default {
  setup() {
    const { mutate: addnewGame } = useMutation(gqlAddGAmeMutation);
    const { mutate: deleteexistGame } = useMutation(gqldeleteGAmeMutation);
    const { mutate: updateexistGame } = useMutation(gqlupdateGAmeMutation);
    return {
      addnewGame,
      deleteexistGame,
      updateexistGame,
    };
  },

  data() {
    return {
      showAddGameInput: true,
      showDeleteGameInput: false,
      showUpdateGameInput: false,
      newGame: {
        title: "",
        description: "",
        platform: "",
        version: "",
      },
      gameIdToDelete: null,
      gameTitleToDelete: "",
      updatedGameid: null,
      updatedGame: {
        title: "",
        description: "",
        platform: "",
        version: "",
      },
    };
  },
  methods: {
    toggleAddGameInput() {
      this.showAddGameInput = !this.showAddGameInput;
    },
    toggleDeleteGameInput() {
      this.showDeleteGameInput = !this.showDeleteGameInput;
    },
    toggleUpdateGameInput() {
      this.showUpdateGameInput = !this.showUpdateGameInput;
    },
    addGame() {
      // Dispatch an action to add a game to the store
      this.newGame.version = parseInt(this.newGame.version);
      this.addnewGame({ game: this.newGame });
      this.resetInputs();
    },
    deleteGame() {
      // Dispatch an action to delete a game from the store
      const gameId = parseInt(this.gameIdToDelete);
      this.deleteexistGame({ id: gameId, title: this.gameTitleToDelete });
      this.resetInputs();
    },
    updateGame() {
      // Dispatch an action to update a game in the store
      this.updatedGame.version = parseInt(this.updatedGame.version);
      const gameId = parseInt(this.updatedGameid);
      this.updateexistGame({ id: gameId, edits: this.updatedGame });
      this.resetInputs();
    },
    resetInputs() {
      this.newGame = { title: "", description: "" };
      this.gameIdToDelete = null;
      this.gameTitleToDelete = "";
      this.updatedGame = { id: null, title: "", description: "" };
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
  transition: border-color 0.5s;
}

.input-field:focus {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  outline: none;
}

.save-button,
.delete-button,
.update-button {
  margin-top: 10px;
  width: 100px;
  padding: 10px;
  background-color: #2ecc71;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
}

.save-button:hover,
.delete-button:hover,
.update-button:hover {
  background-color: #27ae60;
}
</style>

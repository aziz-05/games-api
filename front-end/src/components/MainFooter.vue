<script setup>
import { RouterLink } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import SearchInput from "./SearchInput.vue";
import HomeView from "../views/HomeView.vue";
import { ref } from "vue";

let search = ref("");
search = () => {
  console.log(SearchInput.games);
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="nav-container">
        <RouterLink active-class="active" style="text-decoration: none" to="/"
          ><button class="btn btn-outline-success">Home</button></RouterLink
        >
        <RouterLink
          active-class="active"
          style="text-decoration: none"
          to="/about"
          ><button class="btn btn-outline-success">About</button></RouterLink
        >
      </div>

      <div class="input">
        <SearchInput />

        <button class="btn btn-success" @click="search" style="height: 43px">
          Submit
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.active {
  background-color: rgb(235, 243, 235);
  border-radius: 5px;
  color: rgb(255, 255, 255);
}

.input {
  display: flex;
  justify-items: center;
}

.nav-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  height: 50px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  border: none;
  color: rgb(30, 83, 30);
  transition: all 0.2s;
}

.btn:hover {
  color: black;
  border: none;
  background-color: rgb(188, 230, 188);
}

.footer {
  height: 200px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  bottom: 0;

  position: sticky;
}
</style>

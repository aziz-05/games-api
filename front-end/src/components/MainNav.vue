<script setup>
import { RouterLink } from "vue-router";
import "bootstrap/dist/css/bootstrap.css";
import SearchInput from "./SearchInput.vue";
import HomeView from "../views/HomeView.vue";
import { ref } from "vue";
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-container">
        <RouterLink style="text-decoration: none" to="/"
          ><a class="navbar-brand logo" href="">
            <img
              src="../assets/logoGame.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
            GameLand
          </a>
        </RouterLink>
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

        <!-- {{randomState}}
      <button @click="randomState = 'Hello there'">Click me</button>
      --></div>
    </div>
  </nav>
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
  color: white;
  background-color: rgb(188, 230, 188);
}
.navbar {
  height: 75px;
  display: flex;
  justify-content: space-between;
  background-color: white;
}
</style>

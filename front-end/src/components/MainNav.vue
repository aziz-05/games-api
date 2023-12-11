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
      <div class="left-container">
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
      <div class="middle-container">
        <div class="input">
          <SearchInput />
        </div>
      </div>
      <div class="right-container">
        <div>
          <RouterLink to="/login"
            ><button class="btn btn-light p-1">login</button></RouterLink
          >
          <RouterLink to="/register"
            ><button class="btn btn-light p-1">Sign up</button></RouterLink
          >
        </div>

        <RouterLink style="text-decoration: none" to="/">
          <button class="profile">
            <img
              src="../assets/logoGame.png"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </button>
        </RouterLink>
      </div>
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
.left-container,
.right-container,
.middle-container {
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  height: 50px;
}

.btn-outline-secondary,
.btn-outline-success {
  border: none;
  transition: all 0.3s;
}
.btn-outline-success:hover {
  border: none;
  background-color: rgb(131, 194, 159);
}
.right-container {
  margin-right: 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

.profile {
  display: flex;
  border: 1px solid green;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
}

.navbar {
  height: 75px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: white;
}
</style>

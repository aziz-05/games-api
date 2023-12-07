<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="auth-form">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />
      <button type="submit">Login</button>
    </form>
    <div class="mb-3 f-r-container">
      <RouterLink style="text-decoration: none" to="/forgot-password">
        Forgot my password
      </RouterLink>
      <RouterLink style="text-decoration: none" to="/register"
        ><button class="btn btn-outline-ligth">Register?</button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const username = ref("");
const password = ref("");

const login = () => {
  // Implement login logic (e.g., make API request to authenticate user)
  console.log("Logging in with:", username.value, password.value);
  // After successful login, you may redirect the user to another page
};
</script>

<style scoped>
.f-r-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.auth-container {
  max-width: 400px;
  margin: 15% auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #343a40;
  text-align: center;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  color: #495057;
}

input {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ced4da;
  border-radius: 4px;
  transition: all 0.3s;
}

input:focus {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  outline: none;
}
form button {
  background-color: #109955;
  color: #fff;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

form button:hover {
  background-color: #01743a;
}
</style>

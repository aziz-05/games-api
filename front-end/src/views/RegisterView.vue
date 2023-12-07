<template>
  <div class="auth-container">
    <h2>Register</h2>
    <form @submit.prevent="register" class="auth-form">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" required />
      <label for="email">Email:</label>
      <input v-model="email" type="email" id="email" required />
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />
      <button type="submit">Register</button>
    </form>
    <div class="mb-3 f-r-container">
      <RouterLink style="text-decoration: none" to="/login"
        ><button class="btn btn-outline-ligth">Login?</button></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");

const register = () => {
  // Implement registration logic (e.g., make API request to create a new user)
  console.log("Registering user:", username.value, password.value);
  // After successful registration, you may redirect the user to another page
};
</script>

<style scoped>
.f-r-container {
  display: flex;
  align-items: center;
  justify-content: end;
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

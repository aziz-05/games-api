<template>
  <div class="auth-container">
    <h2>Login</h2>
    <form @submit.prevent="login" class="auth-form">
      <label for="email">Email:</label>
      <input v-model="email" type="text" id="email" required />
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" required />
      <button type="submit">Login</button>
      <!-- Display error message if authentication fails -->
      <p v-if="showError" class="error-message">Invalid email or password</p>
    </form>
    <div class="mb-3 f-r-container">
      <RouterLink style="text-decoration: none" to="/forgot-password">
        Forgot my password
      </RouterLink>
      <RouterLink style="text-decoration: none" to="/register">
        Register?
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRouter } from "vue-router";
import gqlUsersQuery from "../db/querys/user.js";
import { useQuery } from "@vue/apollo-composable";
import { ref, computed } from "vue";

const router = useRouter();
let user = ref("");
const email = ref("");
const password = ref("");
const showError = ref(false); // New reactive variable to control error message visibility

const { result, loading, error } = useQuery(gqlUsersQuery, {
  id: "",
  email: email,
});

const login = async () => {
  // Implement login logic (e.g., make API request to authenticate user)
  user = computed(() => result.value?.user ?? null);

  if (user.value && user.value.password.trim() === password.value.trim()) {
    // Redirect to the home page after successful login
    router.push(`/home`);
  } else {
    // Set showError to true to display the error message
    showError.value = true;
  }
};
</script>

<style scoped>
.f-r-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.auth-container {
  min-width: 350px;
  margin: 10% auto;
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

.error-message {
  color: red;
  margin-top: 5px;
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

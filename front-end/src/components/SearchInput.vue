<script setup>
import { RouterLink } from "vue-router";
import c from "../data/cars.json";
import { useQuery } from "@vue/apollo-composable";
import carCards from "./GamesCards.vue";
import { watch, ref, computed, watchEffect } from "vue";
import forceRender from "../views/HomeView.vue";
import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import gqlGamesQuery from "../db/querys/games.js";
import gql from "graphql-tag";
import GamesCards from "./GamesCards.vue";
import { useRoute, useRouter, RouterView } from "vue-router";

const router = useRouter();

const searchItem = ref("");

const navigateToSearch = () => {
  router.push(`/search/${searchItem.value}`);
};
</script>

<template>
  <input
    v-model.trim="searchItem"
    type="text"
    name="search"
    id="search"
    placeholder="search"
    @keyup.enter="navigateToSearch"
  />
  <button
    class="btn btn-outline-success"
    @click="navigateToSearch"
    style="height: 43px"
  >
    Search
  </button>
</template>

<style scoped>
input {
  border: none;
  background-color: rgba(32, 184, 108, 0.1);
  padding: 10px;
  border-end-start-radius: 0px;
  border-start-start-radius: 0px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.3s;
}

input[type="text"]:focus {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  outline: none;
}

.btn {
  border: none;
  border-end-start-radius: 0px;
  border-start-start-radius: 0px;
  background-color: rgba(32, 184, 108, 0.1);
  transition: all 0.5s;
}

.btn:hover {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  color: #1aaa62;
}
</style>

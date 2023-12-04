<script setup>
import { RouterLink, useRoute } from "vue-router";
import c from "../data/cars.json";
import { useQuery } from "@vue/apollo-composable";
import GamesCards from "../components/GamesCards.vue";
import { watch, ref, computed, watchEffect } from "vue";

import { logMissingFieldErrors } from "@apollo/client/core/ObservableQuery";
import gqlGamesQuery from "../db/querys/games.js";
import gql from "graphql-tag";
import SideBar from "../components/SideBar.vue";
import SideBarView from "./SideBarView.vue";

const { result, loading, error } = useQuery(gqlGamesQuery);
const gamesA = computed(() => result.value?.games ?? []);

const gamesKey = ref(0);
const games = ref(gamesA);
let searchItem = ref("");
</script>

<template>
  <div v-show="searchItem" class="overlay">
    <div class="options-container">azaz</div>
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
}

.overlayText {
  position: absolute;
  z-index: 1;
}

#topText {
  font-size: 150px;
  font-weight: bolder;
  font-family: cursive;
  background-image: linear-gradient(to left, #3c9a44, #95d393);
  color: transparent;
  background-clip: text;
  margin-right: 80px;
  -webkit-background-clip: text;
}

.overlay {
  position: absolute;
  max-width: 100px;
  max-height: 10000px;
  float: left;
  white-space: nowrap;
  overflow: hidden;
  background-color: rgb(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  margin-right: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header input {
  border: none;
  background-color: rgba(32, 184, 108, 0.1);
  padding: 10px;
  border-radius: 5px;
}

input[type="text"]:focus {
  box-shadow: 0 0 3pt 0.5pt #1aaa62;
  outline: none;
}

header h1 {
  font-size: 70px;
  font-weight: 600;
  background-image: linear-gradient(to left, #3c9a44, #95d393);
  color: transparent;
  background-clip: text;
  margin-right: 80px;
  -webkit-background-clip: text;
}
</style>

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
import GameCard from "../components/GameCard.vue";

const route = useRoute();
let games = ref("");
const { result, loading, error } = useQuery(gqlGamesQuery);
const gamesA = computed(() => result.value?.games ?? []);

// console.log(cc.value = c.filter(c => c.title.toLocaleLowerCase()).includes(searchItem.value.toLocaleLowerCase()));
//console.log(searchItem.value);

function search() {
  const searchinput = route.params.searchinput;
  games = gamesA.value.filter((game) =>
    game.title.toLocaleLowerCase().includes(searchinput.toLocaleLowerCase())
  );

  console.log(games);
}

watch(route, () => {
  search();
});
watch(result, (value) => {
  games.value = value.games;
  search();
});
</script>

<template>
  <RouterLink to="/home"
    ><button class="btn mt-2 back btn-outline-success p-1">
      {{ "< " }}Back
    </button></RouterLink
  >
  <div v-if="games.length" class="options-container">
    <GamesCards :games="games" />
  </div>
  <div v-else class="container">
    <h1>No Game To Show</h1>
  </div>
</template>

<style scoped>
.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  max-width: 80%;
}

h1 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}

.back {
  position: fixed;
  left: 10px;
}
.container {
  margin-bottom: 10px;
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

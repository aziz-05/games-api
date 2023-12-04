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
const { result, loading, error } = useQuery(gqlGamesQuery);
const gamesA = computed(() => result.value?.games ?? []);
const search = ref(false);
let games = ref(gamesA);
const searchItem = ref("");

watch(searchItem, () => {
  // console.log(cc.value = c.filter(c => c.title.toLocaleLowerCase()).includes(searchItem.value.toLocaleLowerCase()));
  //console.log(searchItem.value);
  games = gamesA.value.filter((game) =>
    game.title
      .toLocaleLowerCase()
      .includes(searchItem.value.toLocaleLowerCase())
  );
});

const navigateToSearch = (game) => {
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

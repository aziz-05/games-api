<script setup>
import { RouterLink } from "vue-router";
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
let games = ref(gamesA);
let searchItem = ref("");

const forceRender = () => {
  gamesKey.value += 1;
};

watch(searchItem, () => {
  // console.log(cc.value = c.filter(c => c.title.toLocaleLowerCase()).includes(searchItem.value.toLocaleLowerCase()));
  games = gamesA.value.filter((game) =>
    game.title
      .toLocaleLowerCase()
      .includes(searchItem.value.toLocaleLowerCase())
  );
});
</script>

<template>
  <div class="video">
    <video
      muted="muted"
      autoplay="autoplay"
      loop="loop"
      poster="../assets/jujutsu-kaisen-3840x2160-13342.jpeg"
      class="video"
      data-v-667d9822=""
    >
      <source
        src="https://media.gamereactor.dk/t_Batman_Arkham_Trilogy_Reveal_Trailer_Nintendo_Switch_648543.mp4"
        type="video/mp4"
        data-v-667d9822=""
      />
    </video>
  </div>
  <div class="body-container">
    <div>
      <SideBarView />
    </div>
    <div class="container">
      <header>
        <h1>Our Games</h1>
        <input
          v-model.trim="searchItem"
          type="text"
          name="search"
          id="search"
          placeholder="search"
        />
      </header>

      <div class="options-container">
        <GamesCards :games="games" :key="gamesKey" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-container {
  display: flex;
}
.video {
  width: auto;

  display: flex;
  justify-content: center;
  align-items: center;
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
  z-index: 10000;
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

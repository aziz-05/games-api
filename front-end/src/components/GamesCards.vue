<script setup>
import { useRouter } from "vue-router";
import { ref, computed, watch, watchEffect } from "vue";

import carss from "../data/cars.json";
const { games } = defineProps(["games"]);
const router = useRouter();

const navigateToGame = (game) => {
  router.push(`/cars/${game.id}`);
};
</script>

<template>
  <div v-for="game in games" :key="game.id">
    <div class="card" @click="navigateToGame(game)">
      <img :src="carss[game.id].image" :alt="game.title" />
      <div class="games">
        <div class="wrap">
          <h4>{{ game.title }}</h4>
        </div>

        <div class="version" v-if="game.version">
          <span style="color: rgb(8, 90, 8)">version: </span>{{ game.version }}
        </div>
      </div>
      <div class="platforms mb-1">
        <div class="platform" v-for="gameP in game.platform">
          [<span style="color: rgb(8, 90, 8)">{{ gameP }}</span
          >]
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  margin-right: 10px;

  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  margin-bottom: 5px;
  transition: all 0.4s;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(88, 170, 68, 0.6);
  transition: all 0.5s;
}

.card img:hover {
  box-shadow: 3px 3px 12px rgba(72, 146, 54, 0.6);
}

.card .card-text {
  padding: 0 5px;
}

.card .card-text h2 {
  font-weight: bold;
}

.games {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 0px 20px;
}

.platforms {
  display: flex;
  gap: 5px;
  margin: 0px 20px;
}

.version {
  width: 25%;
}

.wrap {
  width: 60%;
  overflow: hidden;
  white-space: nowrap;
}

.platform {
  overflow: hidden;
  white-space: nowrap;
}

h4 {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22.5px;
  font-weight: 500;
}
</style>

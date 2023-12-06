<script setup>
import { useRoute } from "vue-router";
import cars from "../data/cars.json";
import { useQuery } from "@vue/apollo-composable";
import { ref, computed, watch, watchEffect } from "vue";
import gqlGameQuery from "../db/querys/game.js";

let game = ref("");
const route = useRoute();
const gameId = parseInt(route.params.id);
const { result, loading } = useQuery(gqlGameQuery, { id: gameId });
watch(result, (value) => (game.value = value.game));
console.log(game.value);

//const game = cars.find(c => c.id === parseInt(route.params.id))
</script>

<template>
  <div class="contact">
    <div v-if="game && !loading">
      <h1>Contact Info</h1>
      <p>Authors : {{ game.title }}</p>
      <p>Mobile/Fax: {{ game.title }}</p>
    </div>
    <div v-else>
      <h1>Contact not found</h1>
    </div>
  </div>
</template>

<style scoped>
.contact {
  max-width: 400px;
}
</style>

<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import carss from "../data/cars.json";
import "bootstrap/dist/css/bootstrap.css";

import { useQuery } from "@vue/apollo-composable";
import { ref, computed, watch, watchEffect } from "vue";
import gqlGameQuery from "../db/querys/game.js";

const route = useRoute();
const router = useRouter();
const gameId = parseInt(route.params.id);
let game = ref("");

//game = games.find(g => Number(g.id) === gameId);

const { result, loading } = useQuery(gqlGameQuery, { id: gameId });
watch(result, (value) => (game.value = value.game));

const showContact = (id) => {
  if (!gameId) return;
  return router.push(`/cars/${id}/contact`);
};
</script>
<template>
  <div v-if="loading">Loading...</div>
  <div class="container" v-else-if="game">
    <div class="card mb-3" style="width: 1000px">
      <div class="row">
        <div class="col-md-7 image">
          <img
            :src="carss[game.id].image"
            class="img-fluid rounded-start"
            alt="..."
            style="width: 100%; height: 100%"
          />
        </div>
        <div class="col-md-8 info-card" style="width: 400px; height: 500px">
          <div class="card-body">
            <h5 class="card-title">{{ game.title }}</h5>
            <p class="card-text">
              Platform :
              <small class="text-body-secondary" v-for="gameP in game.platform"
                >[{{ gameP }}]
              </small>
            </p>
            <p class="card-text">
              Varsion :
              <small class="text-body-secondary">{{ game.version }}</small>
            </p>
            <p class="card-text">
              Description :
              <small class="text-body-secondary"> {{ game.description }}</small>
            </p>
          </div>
          <div class="contact-btn">
            <button class="btn btn-success" @click="showContact(game.id)">
              Click for contact
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <h1>Card not found</h1>
  </div>
  <div class="contact">
    <RouterView />
  </div>
</template>

<style scoped>
.row {
  display: flex;
  justify-content: space-between;
}

p {
  color: #3aa868;
}

.contact {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.info-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-btn {
  display: flex;
  justify-content: end;
}

.card {
  margin-top: 50px;
  border: none;
  justify-content: center;
  align-items: center;
}

.card img {
  width: 500px;
  border-radius: 5px;
  height: 500px;
  margin: 0;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}

.container {
  display: flex;
  justify-content: center;
}

h5 {
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  background-image: linear-gradient(to left, rgb(19, 124, 66), #3aa868);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
}
</style>

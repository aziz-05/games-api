<script setup>
import gameCard from "../components/GameCard.vue";
import { useQuery } from "@vue/apollo-composable";
import { ref, computed, watch, watchEffect } from "vue";
import gqlGamesQuery from "../db/querys/games.js";
</script>

<template>
  <gameCard />
</template>

<style scoped></style>

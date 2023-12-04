<template>
  <div class="sidebar">
    <GameSB />
    <ReviewSB />
    <AuthorSB />
  </div>
</template>

<script setup>
import GameSB from "../components/GameSB.vue";
import ReviewSB from "../components/ReviewSB.vue";
import AuthorSB from "../components/AuthorSB.vue";
</script>

<style scoped>
.sidebar {
  background-color: rgb(225, 235, 225);
  color: #ecf0f1;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100%;
  border-radius: 5px;

  width: 25vh;
  padding-top: 20px;
  gap: 15px;
}
</style>

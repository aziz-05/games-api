<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import MainNav from "./components/MainNav.vue";
import MainFooter from "./components/MainFooter.vue";
import SideBar from "./components/SideBar.vue";

const randomState = ref("");
</script>

<template>
  <div class="main-nav">
    <MainNav />
  </div>

  <div class="body">
    <RouterView />
  </div>

  <div class="footer">
    <MainFooter />
  </div>
</template>

<style scoped>
.body {
  margin-top: 75px;
}
.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 75px;
  background-color: #00a087;
}

footer {
  position: relative;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}
</style>

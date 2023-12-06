<!-- GameReviews.vue -->
<template>
  <h2 class="">Reviews</h2>
  <carousel :items-to-show="3" class="container" :wrap-around="true">
    <Slide
      class="card mb-3 mr-3"
      v-for="(review, index) in reviews"
      :key="index"
    >
      <div class="carousel__item">
        <div>
          <button class="rating_circle">{{ review.rating }}</button>
        </div>
        <div class="info-card">
          <div class="card-body">
            <h5 class="card-title">{{ review.author.name }}</h5>

            <p class="card-text">
              <small class="text-body-secondary">{{ review.content }}</small>
            </p>
          </div>
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </carousel>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const { reviews } = defineProps(["reviews"]);
</script>

<style scoped>
/* Add your custom styles here */
.rating_circle {
  width: 100px;
  height: 100px;
  border-radius: 70px;
  border: 1px none;
  font-size: 35px;
  background-color: #42b163;
}

.container {
  gap: 20px;
}
.card {
  display: flex;
  flex-direction: row;
  padding: 20px;
  min-width: 350px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
}
.row {
  display: flex;
  width: 100%;
}

.carousel__slide {
  transform: rotateY(-20deg) scale(0.9);
}
</style>

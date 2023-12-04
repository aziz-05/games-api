<!-- AboutUs.vue -->
<template>
  <div class="about-us">
    <h1>About Us</h1>

    <section>
      <h2>Our Mission</h2>
      <p>{{ missionStatement }}</p>
    </section>

    <section>
      <h2>Meet the Team</h2>
      <ul>
        <li v-for="teamMember in teamMembers" :key="teamMember.id">
          <strong>{{ teamMember.name }}</strong> - {{ teamMember.position }}
        </li>
      </ul>
    </section>

    <!-- Add more sections as needed -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "AboutUs",
  setup() {
    const missionStatement = ref(
      "Our mission is to deliver high-quality products and services to our customers, focusing on innovation and customer satisfaction."
    );

    const teamMembers = ref([
      { id: 4, name: "Aziz", position: "Software Engineer" },
      { id: 5, name: "Hamza", position: "UI/UX Designer" },
      { id: 6, name: "Houssem", position: "Marketing Specialist" },
    ]);

    return {
      missionStatement,
      teamMembers,
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */

.about-us {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

h1 {
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.8em;
  color: #333;
  margin-top: 20px;
}

p {
  font-size: 1.2em;
  color: #666;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>

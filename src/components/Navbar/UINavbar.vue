<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">GS</router-link>
    </div>
    <div class="navbar-menu">
      <router-link v-for="section in sections" :key="section.name" :to="section.link" class="navbar-item"
        active-class="active">
        {{ section.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Section } from '../../types/types' // Adjust the import path as needed

const props = defineProps<{
  sections: Section[]
}>();

const emit = defineEmits(['change', 'delete']);

// Suppress the unused variable warning
// eslint-disable-next-line no-unused-vars
const { sections } = props;

// Additional setup code can go here
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  border-radius: 1rem;
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  margin: 1rem 1rem 1rem 1rem;
  border-radius: 1rem;
}

.navbar-menu {
  display: flex;
  gap: 1rem;
}

.navbar-item {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s, background-color 0.3s;
}

.navbar-item:hover {
  background-color: #444;
  color: #ddd;
}

.navbar-item.active {
  background-color: #555;
  color: #fff;
  font-weight: bold;
}
</style>

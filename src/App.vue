<template>
  <UINavbar :sections="sections"></UINavbar>
  <div class="mt-8">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { Section } from './types/types';
import UINavbar from './components/Navbar/UINavbar.vue';
const sections: Section[] = [
  { name: 'Reference Sheet', link: '/ref-sheet', icon: 'src/assets/MenuIcons/ref-sheet.svg' },
  { name: 'Command', link: '/communications', icon: 'src/assets/MenuIcons/command.svg' },
  { name: 'Settings', link: '/settings', icon: 'src/assets/MenuIcons/settings.svg' }
];


</script>


<style scoped>
div {
  margin-left: 3rem;
}
</style>

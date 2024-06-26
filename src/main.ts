import { createApp } from "vue";
import App from "./App.vue";

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'
import Commands from './views/Commands.vue';
import Log from './views/Log.vue';
import Settings from './views/Settings.vue';
import './index.css'

const routes = [
  { path: '/', component: HomePage },
  { path: '/ref-sheet', component: Commands },
  { path: '/communications', component: Log },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App)
app.use(router)
app.mount('#app')

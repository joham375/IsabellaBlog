import './assets/main.css';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import store from './store/index.js';


const LandingPage = () => import('./components/LandingPage.vue');

const routes = [
  { path: '/', component: LandingPage },
  { path: '/LoginPage', component: () => import('./components/LoginPage.vue') },
  { path: '/RegisterPage', component: () => import('./components/RegisterPage.vue') },
  { path: '/HomePage', component: () => import('./components/HomePage.vue') },
  { path: '/IzzyPortal', component: () => import('./components/IzzyPortal.vue') },
  { path: '/Post/:id', component: () => import('./components/Post.vue') },
  { path: '/Blog', component: () => import('./components/Blog.vue') },
  { path: '/Profile', component: () => import('./components/Profile.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');

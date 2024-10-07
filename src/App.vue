<template>
  <div>
    <!--
    B6
     <div>
      <router-link to="/">Home</router-link>
      <router-link to="/contact">Contact</router-link>
    </div> 
    <router-view></router-view>
    -->
    <!-- B7 -->
    <!-- <div class="navbar">
      <button
        class="nav-button"
        :class="{ active: isActive('/') }"
        @click="navigateTo('/')"
      >
        Home
      </button>
      <button
        class="nav-button"
        :class="{ active: isActive('/contact') }"
        @click="navigateTo('/contact')"
      >
        Contact
      </button>
    </div>
    <router-view></router-view>
  </div> -->
    <router-link></router-link>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const navigateTo = (path) => {
  router.push(path);
};

const isActive = (path) => {
  return route.path === path;
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
}

.navbar {
  display: flex;
  padding: 20px;
  gap: 20px;
}

.nav-button {
  padding: 10px 20px;
  border: none;
  background-color: #d8d8d8;
  color: rgb(0, 0, 0);
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-button.active {
  background-color: #0056b3;
  color: white;
}

.nav-button a {
  color: inherit;
  text-decoration: none;
}

.nav-button:hover {
  background-color: #0056b3;
  color: white;
}
</style>
<template>
  <div id="app">
    <router-link class="nav-link" to="/sellers">Sellers</router-link>
    <router-link class="nav-link" to="/products">Products</router-link>
    <router-link class="nav-link" to="/sales">Sales</router-link>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
#app {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #4ac96ace;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.nav-link:hover {
  background-color: #4cad65;
  color: #fff;
  border-color: #63d876;
  transform: scale(1.1);
}

.content {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>

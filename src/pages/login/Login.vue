<template>
  <div class="login">
    <img class="logo" :src="logo" alt="Vue logo" />
    <h1>Welcome to Your Vue.js App</h1>
    <button @click="loginUser">Login</button>
  </div>
</template>

<script setup lang="ts">
import logo from "../../assets/vue.svg";

/**
 * TODO: install router package
 */
// const router = useRouter();
const loginUser = () => {
  console.log("Login user");
};
</script>

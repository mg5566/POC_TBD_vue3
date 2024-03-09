<template>
  <div>
    <img :src="ProjectA_Logo" alt="ProjectA_Logo" />
    <h1>404</h1>
    <p>Page not found</p>
    <RouterLink to="/">Go to home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import ProjectA_Logo from "../../../public/ProjectA_Logo.svg";
</script>

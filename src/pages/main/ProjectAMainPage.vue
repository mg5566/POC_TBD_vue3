<template>
  <div>
    <img :src="ProjectA_Logo" alt="ProjectA_Logo" />
    <h1>Main Page</h1>
    <div>이곳은 main 화면입니다.</div>
    <div>
      {{ count }}
      <button @click="increment">count 증가</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProjectA_Logo from "../../../public/ProjectA_Logo.svg";

const count = ref(0);
const increment = () => {
  count.value++;
};
</script>

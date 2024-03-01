<template>
  <div>
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

const count = ref(0);
const increment = () => {
  count.value++;
};
</script>

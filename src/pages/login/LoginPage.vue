<template>
  <div class="login">
    <img class="logo" :src="logo" alt="Vue logo" />
    <h1>Welcome to Your Vue.js App</h1>
    <button @click="loginUser">Login</button>
  </div>
</template>

<script setup lang="ts">
import logo from "../../assets/vue.svg";
import { useRouter } from "vue-router";
import loginApi from "../../api/login";

/**
 * TODO: install router package
 */
const router = useRouter();
const loginUser = () => {
  loginApi
    .postLogin("이것은 아이디", "이것은 비밀번호")
    .then((res) => {
      if (res.status === 200) {
        // console.log("res", res);
        // console.log("res.data", res.data);

        if (res.data.status === "success") {
          // 로컬 저장소에 로그인 성공 저장
          localStorage.setItem("sessionId", res.data.sessionId);
          router.push("/");
        }
        return res;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
</script>

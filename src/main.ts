import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router/route";

if (import.meta.env.DEV && import.meta.env.MODE === "development") {
  console.log("Development mode");

  const { worker } = await import("./mock/browser");
  worker.start();
}
const app = createApp(App);

app.use(router);

app.mount("#app");

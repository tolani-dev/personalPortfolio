import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vue3Toastify, { type ToastContainerOptions } from "vue3-toastify";

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Toastify, {
    autoClose: 3000,
  } as ToastContainerOptions)
  .mount("#app");

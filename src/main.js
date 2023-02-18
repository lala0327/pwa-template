import "../index.css";

import { createApp } from "vue";
import { createVfm } from "vue-final-modal";

import App from "./App.vue";
import router from "./router";
const vfm = createVfm();
createApp(App).use(vfm).use(router).mount("#app");

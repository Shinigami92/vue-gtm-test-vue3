import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtm, { VueGtmUseOptions } from "vue-gtm";

const app = createApp(App);

app.use(router);

const vueGtmOptions: VueGtmUseOptions = {
  id: "GTM-DEMO",
};

app.use(VueGtm, vueGtmOptions);

app.mount("#app");

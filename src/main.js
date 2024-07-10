import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@mdi/font/css/materialdesignicons.css";
import { createPinia } from "pinia";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Components

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(createPinia()).use(vuetify).use(router).mount("#app");

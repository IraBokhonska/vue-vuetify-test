// Plugins
import { registerPlugins } from "@/plugins";
import { createRouter, createWebHistory } from "vue-router";

// Components
import App from "./App.vue";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

//styles
import "./scss/main.scss";

// Composables
import { createApp } from "vue";

const app = createApp(App);
registerPlugins(app);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/contact", component: Contact },
    { path: "/:pathMatch(.*)*", component: NotFound },
  ],
});

app.use(router);
app.mount("#app");

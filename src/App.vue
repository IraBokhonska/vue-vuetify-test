<template>
  <v-app>
    <v-main>
      <v-app-bar app flat> <Header /> </v-app-bar>
      <router-view> </router-view>
      <v-footer><Footer /></v-footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data: () => ({}),
};
</script>

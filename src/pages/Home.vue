<template>
  <v-content>
    <Hero />
    <Gallery />
    <Posts />
  </v-content>
</template>

<script>
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Posts from "../components/Posts";

export default {
  name: "Home",
  components: {
    Hero,
    Gallery,
    Posts,
  },

  data() {
    return {};
  },
};
</script>

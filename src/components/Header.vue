<template>
  <v-container>
    <v-toolbar class="mainHeader">
      <v-toolbar-title>Photo gallery</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="goTo('/')">Home</v-btn>
        <v-btn text @click="goTo('/about')">About</v-btn>
        <v-btn text @click="goTo('/contact')">Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),

  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<template>
  <v-footer class="text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
        color="grey"
      ></v-btn>
    </div>

    <div class="pt-0">All rights reserved.</div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Photo gallery </strong></div>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

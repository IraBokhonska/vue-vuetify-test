<template>
  <v-container>
    <v-toolbar class="mainHeader">
      <v-toolbar-title>Photo gallery</v-toolbar-title>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text @click="goTo('/')">Home</v-btn>
        <v-btn text @click="goTo('/about')">About</v-btn>
        <v-btn text @click="goTo('/contact')">Contact</v-btn>
      </v-toolbar-items>
      <div class="hidden-sm-and-up">
        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-btn color="orange" v-bind="props" width="100px">Menu</v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/">Home</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/about">About</router-link></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/contact"
                  >Contact</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
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

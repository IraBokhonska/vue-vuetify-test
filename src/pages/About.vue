<template>
  <v-content>
    <div class="staticHero">
      <v-img cover src="../assets/images/static-hero.jpg">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-container>
              <div class="headline">About Us</div>
            </v-container>
          </v-col>
        </v-row>
      </v-img>
    </div>
    <div class="block">
      <v-container>
        <p>
          Photography is an art form that allows us to express our creativity
          and preserve memories for generations to come. It's a way to capture
          the world around us, from the grand landscapes to the small details,
          and to tell a story through a single image. Whether you're a
          professional photographer or just starting out, the journey of
          improving your craft is always exciting. You can experiment with
          different lighting, compositions, and techniques to create unique and
          visually stunning images. Additionally, photography allows us to
          document the world, capture social and political issues, and raise
          awareness about important causes. So grab your camera, go out and
          explore, and let your creativity run free.
        </p>
      </v-container>
    </div>
    <div class="block">
      <v-container>
        <h2 class="text-center">Our Team</h2>
        <v-row>
          <v-col cols="12" sm="4" v-for="item in items" :key="item.id">
            <v-card class="mx-auto team-card" max-width="400">
              <v-img class="align-end text-white" :src="item.src" cover>
              </v-img>
              <v-card-text>
                <div class="our-team-title">{{ item.name }}</div>
                <div>{{ item.title }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-content>
</template>

<script>
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";

export default {
  name: "About",
  data() {
    return {
      items: [
        {
          id: 1,
          src: team1,
          name: "Peter Smith",
          title: "Director",
        },
        {
          id: 2,
          src: team2,
          name: "Roy Perry",
          title: "Photographer",
        },
        {
          id: 3,
          src: team3,
          name: "Lisa White",
          title: "Freelancer",
        },
      ],
    };
  },
};
</script>

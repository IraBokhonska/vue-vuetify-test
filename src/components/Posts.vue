<template>
  <div class="block latestPostBlock">
    <v-container>
      <h2 class="text-center">Latest posts</h2>
      <v-row>
        <v-col cols="12" md="4" v-for="item in items" :key="item.id">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="item.src"
              cover
            >
              <v-card-title>{{ item.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pt-4">{{ item.subtitle }}</v-card-subtitle>
            <v-card-text>
              {{ item.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange"> Share </v-btn>
              <v-btn color="orange"> More... </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import post1 from "../assets/images/post1.jpg";
import post2 from "../assets/images/post2.jpg";
import post3 from "../assets/images/post3.jpg";

export default {
  name: "Posts",
  data() {
    return {
      show: false,
      items: [
        {
          id: 1,
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
          description:
            "Embark on a scenic journey through the American West, with breathtaking landscapes and historic landmarks. A road trip to remember",
          src: post1,
        },
        {
          id: 2,
          title: "Christmas tales to read",
          subtitle: "2,000 miles of wonder",
          description:
            "Spread joy and cheer this holiday season with festive decor, warm gatherings, and meaningful gifts. Make memories to cherish forever.",
          src: post2,
        },
        {
          id: 3,
          title: "20 movies not to miss in 2020",
          subtitle: "3,000 miles of wonder",
          description:
            "Escape reality and immerse yourself in a world of imagination through the magic of movies. Discover new stories, emotions, and adventures.",
          src: post3,
        },
      ],
    };
  },
};
</script>

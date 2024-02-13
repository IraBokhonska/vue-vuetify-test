<template>
  <div class="heroBlock">
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
        cover
      >
        <v-row
          class="title fill-height hidden-xs-only"
          align="center"
          justify="center"
          >{{ item.title }}
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import imgCarousel1 from "../assets/images/img-carousel1.jpg";
import imgCarousel2 from "../assets/images/img-carousel2.jpg";
import imgCarousel3 from "../assets/images/img-carousel3.jpg";

export default {
  name: "Hero",
  data() {
    return {
      items: [
        {
          src: imgCarousel1,
          title: "We are creative",
        },
        {
          src: imgCarousel2,
          title: "We are hardworking",
        },
        {
          src: imgCarousel3,
          title: "We are professional",
        },
      ],
    };
  },
};
</script>

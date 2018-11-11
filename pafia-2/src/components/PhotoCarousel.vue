<template>
  <v-flex xs10
          md10
          offset-xs1
          align-center
          wrap>
    <v-carousel hide-delimiters>
      <v-carousel-item v-for="(item,i) in items"
                       :key="i"
                       :src="item.src"></v-carousel-item>
    </v-carousel>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    };
  },
};
</script>

<style>
</style>

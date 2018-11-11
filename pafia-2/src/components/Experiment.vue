<template>
  <v-flex xs12
          md4>
    <v-card>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
             height="200px" />
      <v-card-title primary-title>
        <h2> Enjoy this Cactus </h2>
      </v-card-title>
      <v-card-text>This will be some very boring content about the
        life of the cactus, which you dont wanna read.
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange">Share </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data() {
    return {
      items: [{ Name: 'Timmy', Age: '22' }, { Name: 'Timmy', Age: '22' }, { Name: 'Timmy', Age: '22' }, { Name: 'Timmy', Age: '22' }, { Name: 'Timmy', Age: '22' }],
    };
  },
};
</script>

<style>
</style>

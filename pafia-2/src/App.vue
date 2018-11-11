<template>
  <v-app>
    <Header />
    <v-container grid-list-xl>
      <v-layout row
                wrap>
        <BookDates />

        <PhotoCarousel />
        <experiment />
        <experiment />
        <experiment />
        <v-btn @click="someFunction" />
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Experiment from './components/Experiment';
import Reviews from './components/Reviews';
import PhotoCarousel from './components/PhotoCarousel';
import BookDates from './components/BookDates';

export default {
  name: 'App',
  components: {
    Header,
    Experiment,
    Reviews,
    PhotoCarousel,
    BookDates,
  },
  methods: {
    someFunction() {
      console.log('asd');
    },
  },
};
</script>
  <!-- <v-flex v-for="i in 2"
                  :key="`6${i}`"
                  xs6>
            <v-card dark
                    color="secondary">
              <v-card-text class="px-0">6</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 3"
                  :key="`4${i}`"
                  xs4>
            <v-card dark
                    color="primary">
              <v-card-text class="px-0">4</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 4"
                  :key="`3${i}`"
                  xs3>
            <v-card dark
                    color="secondary">
              <v-card-text class="px-0">3</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 6"
                  :key="`2${i}`"
                  xs2>
            <v-card dark
                    color="primary">
              <v-card-text class="px-0">2</v-card-text>
            </v-card>
          </v-flex>
          <v-flex v-for="i in 12"
                  :key="`1${i}`"
                  xs1>
            <v-card dark
                    color="secondary">
              <v-card-text class="px-0">1</v-card-text>
            </v-card>
          </v-flex> -->

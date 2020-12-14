<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center pa-2">
      <v-btn
        xs12
        sm6
        class="text-xs-center info ma-2"
        large
        router
        to="/meetups"
        >Explore Meetups</v-btn
      >
      <v-btn
        xs12
        sm6
        class="text-xs-center info ma-2"
        large
        router
        to="/meetup/new"
        >Organize Meetup</v-btn
      >
    </div>

    <div class="flex-wrap mt-2">
      <div xs12 class="d-flex">
        <v-carousel>
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
          >
            <div class="title">
              {{ meetup.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>

    <div class="d-flex flex-wrap mt-2 justify-center">
      <p xs12>Join our awesome meetups!</p>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    meetups: [
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
        id: "afajfjadfaadfa323",
        title: "Meetup in New York",
      },
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg",
        id: "aadsfhbkhlk1241",
        title: "Meetup in Paris",
      },
    ],
  }),
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
</style>

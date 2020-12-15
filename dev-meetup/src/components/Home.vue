<template>
  <v-container>
    <div class="d-flex flex-wrap justify-center pa-2">
      <v-btn
        xs12
        sm6
        class="text-xs-center yellow darken-3 ma-2"
        large
        to="/meetups"
        >Explore Meetups</v-btn
      >
      <v-btn
        xs12
        sm6
        class="text-xs-center yellow darken-3 ma-2"
        large
        to="/meetup/new"
        >Organize Meetup</v-btn
      >
    </div>

    <div class="flex-wrap mt-2">
      <div xs12 class="d-flex">
        <v-carousel style="cursor:pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :src="meetup.imageUrl"
            :key="meetup.id"
            @click="onLoadMeetup(meetup.id)"
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
  computed: {
    meetups() {
      return this.$store.getters.featuredMeetups;
    },
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push("/meetups/" + id);
    },
  },
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

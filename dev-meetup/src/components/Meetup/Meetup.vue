<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-card>
          <v-card-title class="headline">{{ meetup.title }}</v-card-title>
          <v-card-subtitle
            >{{ meetup.date | date }} - {{ meetup.location }}</v-card-subtitle
          >
          <v-img height="400px" :src="meetup.imageUrl"> </v-img>
          <v-card-text>
            {{ meetup.description }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn class="yellow darken-3">
              <!-- <v-icon left light>mdi-arrow-right</v-icon> -->
              Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    },
  },
};
</script>

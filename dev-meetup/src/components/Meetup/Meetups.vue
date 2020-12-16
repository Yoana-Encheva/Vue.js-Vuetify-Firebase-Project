<template>
  <v-container>
    <v-card max-width="600" class="mx-auto">
      <v-container>
        <v-row dense v-for="meetup in meetups" :key="meetup.id" class="mb-2">
          <v-col cols="12">
            <v-card color="#1F7087" dark>
              <v-row dense>
                <v-col cols="8">
                  <div class="d-flex">
                    <div>
                      <v-card-title class="headline">{{
                        meetup.title
                      }}</v-card-title>
                      <v-card-subtitle>{{
                        meetup.date | date
                      }}</v-card-subtitle>
                      <v-card-actions>
                        <v-btn
                          :to="'/meetups/' + meetup.id"
                          class="ml-2 mt-5"
                          outlined
                          rounded
                          small
                        >
                          <v-icon left light>mdi-arrow-right</v-icon>
                          View Meetup
                        </v-btn>
                      </v-card-actions>
                    </div>
                  </div>
                </v-col>

                <v-col cols="4" class="d-flex justify-end">
                  <v-avatar class="hidden-xs-only ma-3" size="135" tile>
                    <v-img :src="meetup.imageUrl"> </v-img>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups() {
      return this.$store.getters.loadedMeetups;
    },
  },
};
</script>

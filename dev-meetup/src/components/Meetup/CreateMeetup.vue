<template>
  <v-container>
    <v-row>
      <v-col xs12 sm6 offset-sm3>
        <h2>Create a new Meetup</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs12>
        <form @submit.prevent="onCreateMeetup">
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                name="location"
                label="Location"
                id="location"
                v-model="location"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                name="imageUrl"
                label="Image URL"
                id="image-url"
                v-model="imageUrl"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <img :src="imageUrl" height="150" />
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-text-field
                name="description"
                label="Description"
                id="description"
                multi-line
                v-model="description"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <h4>Choose a Data & Time</h4>
            </v-col>
          </v-row>
          <v-row class="mb-2">
            <v-col xs12 sm6 offset-sm3>
              <v-date-picker v-model="date"></v-date-picker>
              <p>{{ date }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-time-picker v-model="time" format="24hr"></v-time-picker>
              <p>{{ time }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col xs12 sm6 offset-sm3>
              <v-btn
                class="yellow darken-3"
                :disabled="!formIsValid"
                type="submit"
                >Create Meetup</v-btn
              >
            </v-col>
          </v-row>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: new Date().toISOString().substr(0, 10),
      time: new Date(),
    };
  },
  computed: {
    formIsValid() {
      return (
        this.title !== "" &&
        this.location !== "" &&
        this.imageUrl !== "" &&
        this.description !== ""
      );
    },
    submittableDateTime() {
      const date = new Date(this.date);
      if (typeof this.time === "string") {
        let hours = this.time.match(/^(\d+)/)[1];
        const minutes = this.time.match(/:(\d+)/)[1];
        date.setHours(hours);
        date.setMinutes(minutes);
      } else {
        date.setHours(this.time.getHours());
        date.setMinutes(this.time.getMinutes());
      }
      return date;
    },
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) {
        return;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime,
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
    },
  },
};
</script>

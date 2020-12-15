<template>
  <v-app>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense class="yellow darken-3">
        <v-app-bar-nav-icon
          @click.stop="sideNav = !sideNav"
          class="hidden-sm-and-up"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="span" style="cursor: pointer"
            >DevMeetup</router-link
          >
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items class="hidden-xs-only">
          <v-btn
            text
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
          >
            <v-icon left>{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </v-card>

    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          link
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false,
      menuItems: [
        {
          icon: "mdi-account-supervisor",
          title: "View Meetups",
          link: "/meetups",
        },
        {
          icon: "mdi-google-classroom",
          title: "Organize Meetup",
          link: "/meetup/new",
        },
        { icon: "mdi-face-profile", title: "Profile", link: "/profile" },
        { icon: "mdi-account", title: "Sign up", link: "/signup" },
        { icon: "mdi-account-arrow-right", title: "Sign in", link: "/signin" },
      ],
    };
  },
};
</script>

<style lang="scss"></style>

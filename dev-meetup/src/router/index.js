import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import CreateMeetup from "../components/Meetup/CreateMeetup.vue";
import Meetups from "../components/Meetup/Meetups.vue";
import Profile from "../components/User/Profile.vue";
import Signin from "../components/User/Signin.vue";
import SignUp from "../components/User/SignUp.vue";
import Meetup from "../components/Meetup/Meetup.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meetups",
    name: "Meetups",
    component: Meetups,
  },
  {
    path: "/meetup/new",
    name: "CreateMeetup",
    component: CreateMeetup,
  },
  {
    path: "/meetups/:id",
    name: "Meetup",
    props: true,
    component: Meetup,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

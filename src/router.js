import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Question from "@/views/Question.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/question/:questionId",
    name: "Question",
    component: Question
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
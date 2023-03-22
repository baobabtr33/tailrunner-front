import { createWebHistory, createRouter } from 'vue-router';
import Home from "@/views/Home.vue";
import Question from "@/views/Question.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
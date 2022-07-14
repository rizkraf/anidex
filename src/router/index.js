import { createRouter, createWebHistory } from "vue-router";
import Layout from "../layouts/Layout.vue";
import IndexView from "../views/IndexView.vue";
import AnimeDetails from "../views/AnimeDetails.vue";
import MangaDetails from "../views/MangaDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "",
          name: "IndexView",
          component: IndexView,
        },
      ],
    },
  ],
});

export default router;

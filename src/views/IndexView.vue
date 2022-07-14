<script setup>
import { onMounted, reactive } from "vue";
import axios from "axios";
import AppCard from "../components/AppCard.vue";

const anime = reactive({
  thisSeason: [],
  top: [],
});

const manga = reactive({
  top: [],
});

const fetchThisSeason = async () => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/seasons/now");
    let { data } = response.data;
    anime.thisSeason = data;
  } catch (error) {
    console.log(error);
  }
};

const fetchTopAnime = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/anime?filter=bypopularity"
    );
    let { data } = response.data;
    anime.top = data;
  } catch (error) {
    console.log(error);
  }
};

const fetchTopManga = async () => {
  try {
    const response = await axios.get(
      "https://api.jikan.moe/v4/top/manga?type=manga&filter=bypopularity"
    );
    let { data } = response.data;
    manga.top = data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchThisSeason();
  fetchTopAnime();
  fetchTopManga();
});
</script>

<template>
  <main class="container py-4">
    <section id="this-season" class="mb-16">
      <div class="flex items-center justify-between">
        <h3 class="mb-8 text-3xl font-bold">This Season</h3>
        <RouterLink to="/">More</RouterLink>
      </div>
      <div class="grid grid-cols-3 items-stretch gap-8 lg:grid-cols-6">
        <AppCard
          v-for="anime in anime.thisSeason.slice(0, 6)"
          :key="anime.mal_id"
          :data="anime"
        />
      </div>
    </section>

    <section id="top-anime" class="mb-16">
      <div class="flex items-center justify-between">
        <h3 class="mb-8 text-3xl font-bold">Popular Anime</h3>
        <RouterLink to="/">More</RouterLink>
      </div>
      <div class="grid grid-cols-3 items-stretch gap-8 lg:grid-cols-6">
        <AppCard
          v-for="anime in anime.top.slice(0, 6)"
          :key="anime.mal_id"
          :data="anime"
        />
      </div>
    </section>

    <section id="top-manga">
      <div class="flex items-center justify-between">
        <h3 class="mb-8 text-3xl font-bold">Popular Manga</h3>
        <RouterLink to="/">More</RouterLink>
      </div>
      <div class="grid grid-cols-3 items-stretch gap-8 lg:grid-cols-6">
        <AppCard
          v-for="manga in manga.top.slice(0, 6)"
          :key="manga.mal_id"
          :data="manga"
        />
      </div>
    </section>
  </main>
</template>

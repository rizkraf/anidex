<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const navs = ref([
  {
    name: "Anime",
    items: [
      {
        name: "Top Anime",
        router: "/",
      },
      {
        name: "Top Airing",
        router: "/",
      },
      {
        name: "Top Upcoming",
        router: "/",
      },
    ],
  },
  {
    name: "Manga",
    items: [
      {
        name: "Top Manga",
        router: "/",
      },
      {
        name: "Publishing",
        router: "/",
      },
    ],
  },
]);
const scrolled = ref(false);
const prevScrollpos = ref(window.pageYOffset);

const onScroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos.value > currentScrollPos) {
    scrolled.value = false;
  } else {
    scrolled.value = true;
  }
  prevScrollpos.value = currentScrollPos;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <header
    class="fixed left-0 z-30 w-full bg-black transition-all duration-300 ease-in-out"
    :class="scrolled ? '-top-20' : 'top-0'"
  >
    <nav class="container flex items-center justify-between py-4">
      <h4 class="text-2xl font-bold">ANIDEX</h4>
      <ul class="flex items-center gap-8 font-medium text-[#939393]">
        <li
          v-for="nav in navs"
          :key="nav.name"
          class="group relative inline-block"
        >
          <span
            class="flex cursor-pointer items-center gap-0.5 py-3 transition-colors duration-300 ease-in-out hover:text-white"
          >
            <span>{{ nav.name }}</span>
            <ChevronDownIcon
              class="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:rotate-180"
            />
          </span>
          <div
            class="invisible absolute top-full left-1/2 z-20 -ml-20 flex w-40 flex-col items-center gap-4 rounded bg-[#101010] px-4 py-6 text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100"
          >
            <RouterLink
              v-for="link in nav.items"
              :key="link.name"
              :to="link.router"
              class="transition-colors duration-300 ease-in-out hover:text-white"
              >{{ link.name }}</RouterLink
            >
          </div>
        </li>
        <!-- <li>Manga</li> -->
      </ul>
      <button class="inline-block rounded bg-primary px-6 py-2 font-bold">
        Login
      </button>
    </nav>
  </header>
</template>

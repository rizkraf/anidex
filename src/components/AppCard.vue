<script setup>
import { StarIcon } from "@heroicons/vue/solid";
const props = defineProps({
  data: {
    type: Array,
  },
});
</script>

<template>
  <di class="relative">
    <RouterLink
      :to="
        props.data.type === 'Manga'
          ? { name: 'MangaDetails', params: { id: props.data.mal_id } }
          : { name: 'AnimeDetails', params: { id: props.data.mal_id } }
      "
      class="relative mb-2.5 inline-block h-full max-h-[17rem] overflow-hidden"
    >
      <img
        :src="props.data.images.webp.image_url"
        class="relative h-full w-full rounded"
        :alt="props.data.title"
      />
      <div
        class="group absolute left-2 bottom-2 flex cursor-default items-center gap-1 rounded bg-black/90 py-1.5 px-2"
      >
        <StarIcon
          class="h-4 w-4 text-white transition-colors duration-200 ease-in-out group-hover:text-yellow-400"
        />
        <span
          class="text-sm transition-colors duration-200 ease-in-out group-hover:text-yellow-400"
          >{{ props.data.score ? props.data.score : "Not Yet Rated" }}</span
        >
      </div>
    </RouterLink>
    <RouterLink
      to="/"
      class="inline-block transition-colors duration-200 ease-in-out hover:text-primary"
      >{{
        props.data.title.length > 35
          ? `${props.data.title.substring(0, 35)}...`
          : props.data.title
      }}</RouterLink
    >
    <div class="bg-red absolute right-0 top-0 z-10">test</div>
  </di>
</template>

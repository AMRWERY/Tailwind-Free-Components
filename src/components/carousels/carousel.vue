<template>
  <div class="relative" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
    <div class="overflow-hidden">
      <div class="flex carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div v-for="(item, index) in items" :key="index" class="w-full">
          <div class="flex items-center justify-center bg-gray-200 h-96 lg:h-full">
            <img :src="item" class="object-cover w-full h-full">
          </div>
        </div>
        <!-- Duplicate the first slide at the end -->
        <div class="w-full">
          <div class="flex items-center justify-center bg-gray-200 h-96 lg:h-full">
            <img :src="items[0]" class="object-cover w-full h-full">
          </div>
        </div>
      </div>
    </div>

    <!-- Adjusted position for slide indicators -->
    <div class="absolute flex space-x-3 transform -translate-x-1/2 bottom-5 left-1/2">
      <button type="button" class="w-3 h-3 rounded-full" :class="{ 'bg-gray-500': currentIndex === 0 }" @click="changeSlide(0)" aria-label="Slide 1"></button>
      <button type="button" class="w-3 h-3 rounded-full" :class="{ 'bg-gray-500': currentIndex === 1 }" @click="changeSlide(1)" aria-label="Slide 2"></button>
      <button type="button" class="w-3 h-3 rounded-full" :class="{ 'bg-gray-500': currentIndex === 2 }" @click="changeSlide(2)" aria-label="Slide 3"></button>
      <button type="button" class="w-3 h-3 rounded-full" :class="{ 'bg-gray-500': currentIndex === 3 }" @click="changeSlide(3)" aria-label="Slide 4"></button>
    </div>

    <div class="absolute inset-y-0 left-0 flex items-center">
      <button @click="prevSlide" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer start-0 group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <button @click="nextSlide" class="absolute top-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer end-0 group focus:outline-none">
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const items = [
  "https://justfields.com/storage/projects/7M5rV059/carterssss.webp",
  "https://justfields.com/storage/projects/7M5rV059/salsssss.webp",
  "https://justfields.com/storage/projects/7M5rV059/express-deals.webp",
  "https://justfields.com/storage/projects/7M5rV059/guess.webp",
];
const currentIndex = ref(0);
let intervalId;

const nextSlide = () => {
  if (currentIndex.value < items.length) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = items.length;
  }
};

const startAutoPlay = () => {
  intervalId = setInterval(() => {
    nextSlide();
  }, 4000);
};

const stopAutoPlay = () => {
  clearInterval(intervalId);
};

onMounted(() => {
  startAutoPlay();
});
</script>

<style scoped>
.carousel {
  transition: transform 0.5s ease;
}

.carousel>div {
  flex: 1 0 100%;
}
</style>
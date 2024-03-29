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
    <div class="absolute inset-y-0 left-0 flex items-center">
      <button @click="prevSlide" class="text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <button @click="nextSlide" class="text-gray-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
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
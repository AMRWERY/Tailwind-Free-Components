<template>
  <div>
    <main>
      <div v-if="isLoading">
        <skeletonLoader />
      </div>

      <div class="max-w-full py-6 mx-auto sm:px-6 lg:px-8" v-else>
        <!-- toggle theme -->
        <button type="button" @click="toggleTheme"
          class="absolute p-1 text-gray-400 rounded-full end-0 me-4 top-4 hover:text-gray-700">
          <i :class="theme === 'dark' ? 'fa-solid fa-sun fa-xl' : 'fa-solid fa-moon fa-xl'"></i>
        </button>

        <progressBar />

        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade">
            <div :key="route.path">
              <component :is="Component" :key="route.path" />
            </div>
          </transition>
        </router-view>

        <scrollToTop />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import skeletonLoader from '../src/components/skeleton-loader.vue'
import progressBar from '../src/components/progress-bar.vue'
import scrollToTop from '../src/components/scroll-to-top.vue'
import useTheme from '@/composables/useTheme';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
});

const { theme, toggleTheme } = useTheme();
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
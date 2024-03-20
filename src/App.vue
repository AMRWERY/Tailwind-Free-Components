<template>
  <main>
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <router-view v-slot="{ Component, route }">
        <transition name="slide-fade">
          <div :key="route.path">
            <component :is="Component" :key="route.path" />
          </div>
        </transition>
      </router-view>
    </div>
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
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
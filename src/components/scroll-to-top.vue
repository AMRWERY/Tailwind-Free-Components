<template>
    <div>
        <button v-if="isVisible" @click="scrollToTop"
            class="fixed flex items-center justify-center p-3 text-black transition-all duration-300 bg-white border border-gray-400 rounded-full shadow-lg bottom-8 end-8 hover:bg-black hover:text-white"
            aria-label="Scroll to top">
            <i class="w-6 h-6 fa-solid fa-angles-up"></i>
        </button>
    </div>
</template>

<script setup>
//import it in app.vue component

import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
    isVisible.value = window.scrollY > 200;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
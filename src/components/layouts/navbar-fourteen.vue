<template>
    <nav class="relative px-4 py-3 text-white bg-blue-600">
        <!-- Logo and Toggle Button -->
        <div class="flex items-center justify-between">
            <a href="#" class="text-2xl font-bold">Logo</a>
            <button class="text-white lg:hidden" @click="toggleMenu" aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>

        <!-- Slide-In Menu -->
        <div :class="{
            'translate-y-full opacity-0': !isMenuOpen,
            'translate-y-0 opacity-100': isMenuOpen,
        }"
            class="fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-blue-700 bg-opacity-95 lg:hidden">
            <button class="absolute text-2xl text-white top-4 right-4" @click="toggleMenu">
                &times;
            </button>
            <ul class="space-y-6">
                <li v-for="item in menuItems" :key="item.title" class="text-lg font-semibold hover:underline">
                    <router-link :to="item.route" @click="toggleMenu">{{ item.title }}</router-link>
                </li>
            </ul>
        </div>

        <!-- Regular Navbar for Large Screens -->
        <div class="hidden lg:flex lg:space-x-6 lg:items-center">
            <router-link v-for="item in menuItems" :key="item.title" :to="item.route"
                class="text-lg font-semibold hover:text-blue-300">
                {{ item.title }}
            </router-link>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

// State for menu visibility
const isMenuOpen = ref(false);

// Toggle menu visibility
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Navbar menu items
const menuItems = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Services", route: "/services" },
    { title: "Contact", route: "/contact" },
];
</script>

<style scoped>
/* Optional for smooth scrolling effects */
body {
    overflow: hidden;
}
</style>
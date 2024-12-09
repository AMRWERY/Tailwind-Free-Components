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

        <!-- Collapsible Overlay Menu -->
        <div :class="{
            'hidden': !isMenuOpen,
            'fixed inset-0 flex flex-col items-center justify-center bg-blue-700 bg-opacity-90 z-50': isMenuOpen,
        }" class="lg:flex lg:items-center lg:static lg:bg-transparent lg:z-auto lg:flex-row lg:space-x-6">
            <a v-for="item in menuItems" :key="item.title" :href="item.route"
                class="block px-3 py-2 text-lg font-semibold rounded-lg hover:bg-blue-800 lg:hover:bg-transparent lg:text-white">
                {{ item.title }}
            </a>

            <!-- Close Button for Small Screens -->
            <button class="mt-4 text-lg text-white lg:hidden" @click="toggleMenu">
                Close
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const menuItems = [
    { title: "Home", route: "/" },
    { title: "About", route: "/about" },
    { title: "Services", route: "/services" },
    { title: "Contact", route: "/contact" },
];
</script>
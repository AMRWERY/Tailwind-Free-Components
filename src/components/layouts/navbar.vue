<template>
    <div>
        <!-- component -->
        <nav class="bg-gray-100">
            <div class="flex items-center justify-between px-10 py-4 bg-white lg:px-40 md:px-20">
                <div class="">
                    <a href="#">
                        <img class="h-6 cursor-pointer" src="https://i.imgur.com/TMfJoK7.png" alt="" />
                    </a>
                </div>
                <!-- Desktop menu -->
                <ul class="items-center hidden space-x-10 lg:flex">
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Home
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Pages
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Products
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Contact
                    </li>
                </ul>

                <ul class="items-center hidden space-x-4 lg:flex">
                    <li class="transition duration-200 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </li>
                    <li class="transition duration-200 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                    </li>
                </ul>
                <!-- Mobile menu button -->
                <div class="lg:hidden">
                    <svg @click="toggleMobileMenu" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 cursor-pointer"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
            <!-- Mobile menu -->
            <div v-if="isMobileMenuOpen" class="block m-4 lg:hidden">
                <ul class="flex flex-col items-start pl-4 mt-4 space-y-4">
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Home
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Pages
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Products
                    </li>
                    <li class="text-lg font-semibold transition duration-200 cursor-pointer hover:text-red-500">Contact
                    </li>
                </ul>

                <ul class="flex items-start pl-4 mt-4 space-x-4">
                    <li class="transition duration-200 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path
                                d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                        </svg>
                    </li>
                    <li class="transition duration-200 cursor-pointer hover:text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
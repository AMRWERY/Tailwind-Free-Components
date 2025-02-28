<template>
    <div>
        <nav class="bg-white shadow-lg">
            <div class="max-w-screen-xl px-4 mx-auto">
                <div class="flex items-center justify-between h-16">
                    <!-- Left Column -->
                    <div class="flex-shrink-0">
                        <router-link to="" role="button" class="flex items-center space-s-1" @click="toggleSidebar">
                            <i class="fa-solid fa-bars"></i>
                            <p>Menu</p>
                        </router-link>
                    </div>

                    <!-- Center Column: Navigation Links -->
                    <router-link to="/">
                        <p class="text-3xl font-semibold">Louis Vuitton</p>
                    </router-link>

                    <!-- Right Column: Action Buttons -->
                    <div class="flex items-center space-s-2">
                        <router-link to="" class="mt-1 text-gray-700 hover:text-blue-500">
                            <i class="fa-regular fa-heart"></i>
                        </router-link>
                        <router-link to="" class="mt-1 text-gray-700 hover:text-blue-500">
                            <i class="fa-regular fa-user"></i>
                        </router-link>
                        <router-link to="" class="mt-1 text-gray-700 hover:text-blue-500">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>

        <transition name="slide">
            <aside v-if="isSidebarOpen" class="fixed inset-y-0 z-50 bg-white shadow-lg w-80 start-0">
                <div class="p-4">
                    <!-- Close button -->
                    <button @click="toggleSidebar" class="flex items-center mb-4 space-s-1 focus:outline-none">
                        <i class="fa-solid fa-xmark"></i>
                        <span>Close</span>
                    </button>
                    <ul class="space-y-4">
                        <li v-for="(item, index) in mainMenu" :key="index">
                            <button type="button" @click="openSubmenu(item)"
                                class="flex items-center justify-between w-full text-gray-800 group hover:text-blue-500">
                                <span class="relative">
                                    {{ item.label }}
                                    <span
                                        class="absolute block h-0.5 w-full bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </span>
                                <i
                                    class="transition-opacity duration-300 opacity-0 fa-solid fa-angle-right group-hover:opacity-100"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
        </transition>

        <!-- Sub Sidebar -->
        <transition name="slide">
            <aside v-if="activeSubmenu" class="fixed inset-y-0 z-50 shadow-lg start-0 bg-gray-50 w-80">
                <div class="p-4">
                    <!-- Back Button -->
                    <button @click="closeSubmenu" class="flex items-center mb-4 space-x-1 focus:outline-none">
                        <i class="fa-solid fa-arrow-left"></i>
                        <span>Back</span>
                    </button>
                    <h3 class="mb-4 text-xl font-semibold">{{ activeSubmenu.label }}</h3>
                    <ul class="space-y-4">
                        <li v-for="(subItem, idx) in activeSubmenu.subItems" :key="idx">
                            <router-link :to="subItem.link" class="block text-gray-800 group hover:text-blue-500"
                                @click="closeSidebar">
                                <span class="relative">
                                    {{ subItem.label }}
                                    <span
                                        class="absolute block h-0.5 w-full bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </aside>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false)
const activeSubmenu = ref(null)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
    if (!isSidebarOpen.value) {
        activeSubmenu.value = null
    }
}

const closeSidebar = () => {
    isSidebarOpen.value = false
    activeSubmenu.value = null
}

const openSubmenu = (item) => {
    activeSubmenu.value = item
}

const closeSubmenu = () => {
    activeSubmenu.value = null
}

const mainMenu = [
    {
        label: 'Gifts',
        subItems: [
            { label: 'Gifts for Her', link: '' },
            { label: 'Gifts for Him', link: '' },
            { label: 'Gifts for Couples', link: '' },
            { label: 'Gifts for Babies', link: '' },
            { label: 'All Gifts', link: '' },
            { label: 'Personalization', link: '' },
        ],
    },
    {
        label: 'New',
        subItems: [
            { label: 'For Women', link: '' },
            { label: 'For Men', link: '' },
            { label: 'For Pets', link: '' },
        ],
    },
    {
        label: 'Bags and Small Leather Goods',
        subItems: [
            { label: "Women's Bags", link: '' },
            { label: "Men's Bags", link: '' },
            { label: "Women's Small Leather Goods", link: '' },
            { label: "Men's Small Leather Goods", link: '' },
        ],
    },
    {
        label: 'Women',
        subItems: [
            { label: 'Handbags', link: '' },
            { label: 'Small Leather Goods', link: '' },
            { label: 'Shoes', link: '' },
            { label: 'Accessories', link: '' },
            { label: 'Fashion Jewelry', link: '' },
            { label: 'Ready-to-Wear', link: '' },
            { label: 'Travel', link: '' },
        ],
    },
    {
        label: 'Men',
        subItems: [
            { label: 'Bags', link: '' },
            { label: 'Small Leather Goods', link: '' },
            { label: 'Shoes', link: '' },
            { label: 'Accessories', link: '' },
            { label: 'Fashion Jewelry', link: '' },
            { label: 'Ready-to-Wear', link: '' },
            { label: 'Travel', link: '' },
        ],
    },
    {
        label: 'Jewelry',
        subItems: [
            { label: 'Collections', link: '' },
            { label: 'Icons', link: '' },
            { label: 'Highlights', link: '' },
            { label: 'Categories', link: '' },
            { label: 'High Jewelry', link: '' },
        ],
    },
    {
        label: 'Watches',
        subItems: [
            { label: 'All Watches', link: '' },
            { label: 'Watches Collections', link: '' },
            { label: 'High Watchmaking', link: '' },
            { label: 'The Factory of Time', link: '' },
        ],
    },
    {
        label: 'Perfumes',
        subItems: [
            { label: 'Highlights', link: '' },
            { label: 'Iconic Scents', link: '' },
            { label: 'Categories', link: '' },
            { label: 'Exceptional Creations', link: '' },
            { label: 'World of Fragrances', link: '' },
        ],
    },
    {
        label: 'Trunks, Travel and Home',
        subItems: [
            { label: 'Trunks and Boxes', link: '' },
            { label: 'Travel Bags and Rolling Luggage', link: '' },
            { label: 'Home and Art of Dining', link: '' },
            { label: 'Sport and Games', link: '' },
            { label: 'Library', link: '' },
            { label: 'Tech Objects and Accessories', link: '' },
        ],
    },
    {
        label: 'Services',
        subItems: [
            { label: 'Personalization', link: '' },
            { label: 'Art of Gifting', link: '' },
            { label: 'Louis Vuitton Repairs', link: '' },
        ],
    },
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-100%);
}
</style>
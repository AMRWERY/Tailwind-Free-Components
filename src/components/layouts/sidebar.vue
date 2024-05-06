<template>
    <div class="bg-gray-100">
        <div class="flex h-screen overflow-hidden bg-gray-200">
            <!-- Sidebar -->
            <div class="absolute w-56 min-h-screen overflow-y-auto text-white transition-transform duration-300 ease-in-out transform -translate-x-full bg-gray-800"
                id="sidebar" ref="sidebar">
                <!-- Your Sidebar Content -->
                <div class="p-4">
                    <h1 class="text-2xl font-semibold">Sidebar</h1>
                    <ul class="mt-4">
                        <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Home</a></li>
                        <li class="mb-2"><a href="#" class="block hover:text-indigo-400">About</a></li>
                        <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Services</a></li>
                        <li class="mb-2"><a href="#" class="block hover:text-indigo-400">Contact</a></li>
                    </ul>
                </div>
            </div>

            <!-- Content -->
            <div class="flex flex-col flex-1 overflow-hidden">
                <!-- Navbar -->
                <div class="bg-white shadow">
                    <div class="container mx-auto">
                        <div class="flex items-center justify-between px-2 py-4">
                            <h1 class="text-xl font-semibold">Animated Drawer</h1>

                            <button class="text-gray-500 hover:text-gray-600" id="open-sidebar" @click="toggleSidebar">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- Content Body -->
                <div class="flex-1 p-4 overflow-auto">
                    <h1 class="text-2xl font-semibold">Welcome to our website</h1>
                    <p>... Content goes here ...</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const sidebar = ref(null);
const openSidebarButton = ref(null);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

const toggleSidebar = (e) => {
    e.stopPropagation();
    sidebar.value.classList.toggle('-translate-x-full');
};

const handleClickOutside = (e) => {
    if (!sidebar.value.contains(e.target) && !openSidebarButton.value.contains(e.target)) {
        sidebar.value.classList.add('-translate-x-full');
    }
};
</script>
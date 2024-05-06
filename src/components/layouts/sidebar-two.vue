<template>
    <div class="flex h-screen bg-gray-100">
        <!-- sidebar -->
        <div :class="['xs:flex', isOpen ? 'flex' : 'hidden', 'flex-col w-64 bg-gray-800']">
            <div class="flex items-center justify-center h-16 bg-gray-900">
                <span class="font-bold text-white uppercase">Sidebar</span>
            </div>
            <div class="flex flex-col flex-1 overflow-y-auto">
                <nav class="flex-1 px-2 py-4 bg-gray-800">
                    <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        Dashboard
                    </a>
                    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Messages
                    </a>
                    <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Settings
                    </a>
                </nav>
            </div>
        </div>

        <!-- Main content -->
        <div class="flex flex-col flex-1 overflow-y-auto">
            <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                <div class="flex items-center px-4">
                    <button class="text-gray-500 focus:outline-none focus:text-gray-700" @click="toggleSidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <input class="w-full px-4 py-2 mx-4 border rounded-md" type="text" placeholder="Search">
                </div>
                <div class="flex items-center pr-4">
                    <button
                        class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="p-4">
                <h1 class="text-2xl font-bold">Welcome to my dashboard!</h1>
                <p class="mt-2 text-gray-600">This is an example dashboard using Tailwind CSS.</p>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isOpen = ref(true);

const toggleSidebar = () => {
    isOpen.value = !isOpen.value;
};

onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
});

const checkScreenSize = () => {
    if (window.matchMedia('(max-width: 768px)').matches) {
        isOpen.value = false;
    } else {
        isOpen.value = true;
    }
};
</script>
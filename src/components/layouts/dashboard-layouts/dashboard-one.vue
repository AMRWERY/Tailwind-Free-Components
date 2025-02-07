<template>
    <div>
        <div class="relative flex h-screen bg-gray-100">
            <!-- Static Sidebar for Large Screens -->
            <div class="hidden lg:flex lg:flex-col lg:w-64 lg:bg-gray-800">
                <div class="flex items-center justify-center h-16 bg-gray-900">
                    <span class="font-bold text-white capitalize">Daystar Dashboard</span>
                </div>
                <div class="flex flex-col flex-1 overflow-y-auto">
                    <nav class="flex-1 px-2 py-4">
                        <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <i class="fa-solid fa-user-plus me-2"></i>
                            Baby Sitters
                        </router-link>
                        <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <i class="fa-solid fa-users me-2"></i>
                            Babies
                        </router-link>
                        <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <i class="fa-solid fa-display me-2"></i>
                            Procurement
                        </router-link>
                        <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <i class="fa-solid fa-wallet me-2"></i>
                            Transactions
                        </router-link>
                        <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                            <i class="fa-solid fa-gear me-2"></i>
                            Settings
                        </router-link>
                    </nav>
                </div>
            </div>

            <!-- Main Content -->
            <div class="flex flex-col flex-1 overflow-y-auto">
                <div class="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
                    <!-- Toggle Sidebar Button (visible on small screens only) -->
                    <button @click="toggleSidebar" class="text-gray-500 focus:outline-none lg:hidden">
                        <i class="fa-solid fa-bars fa-lg"></i>
                    </button>
                    <!--search input -->
                    <div class="relative">
                        <input type="text" placeholder="Search" class="w-full px-4 py-2 border rounded-md pe-10" />
                        <span class="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            <i class="text-gray-400 fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>
                <div class="p-4">
                    <h1 class="text-2xl font-bold">Welcome to Daystar Daycare</h1>
                    <p class="mt-2 text-gray-600">Raising tomorrow's leaders.</p>
                </div>
            </div>

            <!-- Overlay Sidebar for Smaller Screens -->
            <Transition>
                <div v-if="isSidebarOpen" class="fixed inset-0 z-50 lg:hidden">
                    <!-- Backdrop -->
                    <div class="absolute inset-0 bg-black opacity-50" @click="toggleSidebar"></div>
                    <!-- Sidebar as overlay -->
                    <div class="relative z-50 w-64 h-full bg-gray-800 shadow-xl">
                        <div class="flex items-center justify-between h-16 px-4 bg-gray-900">
                            <span class="font-bold text-white capitalize">Daystar Dashboard</span>
                            <button @click="toggleSidebar" class="text-white focus:outline-none">
                                <i class="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <nav class="flex flex-col p-2 space-y-2">
                            <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <i class="fa-solid fa-user-plus me-2"></i>
                                Baby Sitters
                            </router-link>
                            <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <i class="fa-solid fa-users me-2"></i>
                                Babies
                            </router-link>
                            <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <i class="fa-solid fa-display me-2"></i>
                                Procurement
                            </router-link>
                            <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <i class="fa-solid fa-wallet me-2"></i>
                                Transactions
                            </router-link>
                            <router-link to="" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                                <i class="fa-solid fa-gear me-2"></i>
                                Settings
                            </router-link>
                        </nav>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isSidebarOpen = ref(false);

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
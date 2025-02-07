<template>
    <div class="relative">
        <!-- Main Container -->
        <div class="flex">
            <!-- Static Sidebar for large screens -->
            <aside class="hidden w-64 min-h-screen bg-gray-800 lg:block">
                <div class="px-4 py-3 mb-8 bg-gray-900 border-b-2 border-gray-800">
                    <router-link to="" class="text-white">Logo</router-link>
                </div>
                <nav class="text-sm text-gray-300">
                    <ul class="flex flex-col">
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-display me-4"></i>
                                Dashboard
                            </router-link>
                        </li>
                        <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">User Management
                        </li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-user-group me-4"></i>
                                Users
                            </router-link>
                        </li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-gear me-4"></i>
                                Roles
                            </router-link>
                        </li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-lock me-4"></i>
                                Permissions
                            </router-link>
                        </li>
                        <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Product
                            Management</li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-layer-group me-4"></i>
                                Categories
                            </router-link>
                        </li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link class="flex items-center py-3" to="">
                                <i class="fa-solid fa-basket-shopping me-4"></i>
                                Products
                            </router-link>
                        </li>
                        <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">ecommerce</li>
                        <li class="px-4 hover:bg-gray-700">
                            <router-link to="" class="flex items-center py-3">
                                <i class="fa-solid fa-cart-shopping me-4"></i>
                                Orders
                            </router-link>
                        </li>
                        <li class="px-4 hover:bg-gray-700">
                            <router-link to="" class="flex items-center py-3">
                                <i class="fa-solid fa-money-bill-1-wave me-4"></i>
                                Payments
                            </router-link>
                        </li>
                        <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Information
                            Management</li>
                        <li class="px-4 hover:bg-gray-700">
                            <router-link to="" class="flex items-center py-3">
                                <i class="fa-regular fa-file-powerpoint me-4"></i>
                                Reports
                            </router-link>
                        </li>
                        <li class="px-4 py-2 mt-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Apps</li>
                        <li class="px-4 cursor-pointer hover:bg-gray-700">
                            <router-link to="" class="flex items-center py-2">
                                <i class="fa-solid fa-envelope me-3"></i>
                                Messages
                                <span class="px-2 py-1 ml-auto text-xs bg-gray-500 rounded-sm">16</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </aside>

            <!-- Main Content -->
            <div class="flex-1">
                <header class="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
                    <!-- Toggle button for small screens only -->
                    <button @click="toggleSidebar" class="text-gray-500 focus:outline-none lg:hidden">
                        <i :class="isSidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars fa-lg'"></i>
                    </button>
                    <!--search input -->
                    <div class="relative">
                        <input type="text" placeholder="Search" class="w-full px-4 py-2 border rounded-md pe-10" />
                        <span class="absolute inset-y-0 flex items-center pointer-events-none end-0 pe-3">
                            <i class="text-gray-400 fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </header>

                <!-- Page Content -->
                <main class="p-4">
                    <h1 class="text-2xl font-bold">Welcome to Daystar Daycare</h1>
                    <p class="mt-2 text-gray-600">Raising tomorrow's leaders.</p>
                </main>
            </div>
        </div>

        <!-- Sidebar Overlay for small screens -->
        <Transition>
            <div v-if="isSidebarOpen" class="fixed inset-0 z-50 lg:hidden">
                <!-- Backdrop: clicking it closes the sidebar -->
                <div class="absolute inset-0 bg-black opacity-50" @click="toggleSidebar"></div>
                <!-- Sidebar Overlay -->
                <aside class="relative z-50 w-64 min-h-screen bg-gray-800">
                    <!-- Sidebar Header with Toggle Button -->
                    <div
                        class="flex items-center justify-between px-4 py-3 mb-8 bg-gray-900 border-b-2 border-gray-800">
                        <router-link to="" class="text-white">Logo</router-link>
                        <button @click="toggleSidebar" class="text-white focus:outline-none">
                            <i :class="isSidebarOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars fa-lg'"></i>
                        </button>
                    </div>
                    <!-- Sidebar Navigation -->
                    <nav class="text-sm text-gray-300">
                        <ul class="flex flex-col">
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-display me-4"></i>
                                    Dashboard
                                </router-link>
                            </li>
                            <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">User
                                Management</li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-user-group me-4"></i>
                                    Users
                                </router-link>
                            </li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-gear me-4"></i>
                                    Roles
                                </router-link>
                            </li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-lock me-4"></i>
                                    Permissions
                                </router-link>
                            </li>
                            <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Product
                                Management</li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-layer-group me-4"></i>
                                    Categories
                                </router-link>
                            </li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link class="flex items-center py-3" to="">
                                    <i class="fa-solid fa-basket-shopping me-4"></i>
                                    Products
                                </router-link>
                            </li>
                            <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">ecommerce
                            </li>
                            <li class="px-4 hover:bg-gray-700">
                                <router-link to="" class="flex items-center py-3">
                                    <i class="fa-solid fa-cart-shopping me-4"></i>
                                    Orders
                                </router-link>
                            </li>
                            <li class="px-4 hover:bg-gray-700">
                                <router-link to="" class="flex items-center py-3">
                                    <i class="fa-solid fa-money-bill-1-wave me-4"></i>
                                    Payments
                                </router-link>
                            </li>
                            <li class="px-4 py-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Information
                                Management
                            </li>
                            <li class="px-4 hover:bg-gray-700">
                                <router-link to="" class="flex items-center py-3">
                                    <i class="fa-regular fa-file-powerpoint me-4"></i>
                                    Reports
                                </router-link>
                            </li>
                            <li class="px-4 py-2 mt-2 text-xs font-bold tracking-wider text-gray-500 capitalize">Apps
                            </li>
                            <li class="px-4 cursor-pointer hover:bg-gray-700">
                                <router-link to="" class="flex items-center py-2">
                                    <i class="fa-solid fa-envelope me-3"></i>
                                    Messages
                                    <span class="px-2 py-1 ml-auto text-xs bg-gray-500 rounded-sm">16</span>
                                </router-link>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        </Transition>
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
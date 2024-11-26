<template>
    <div>
        <div class="min-h-screen p-8 bg-gray-100">
            <div class="container mx-auto">
                <!-- Tabs Container -->
                <div class="flex border-b border-gray-300">
                    <!-- Tab 1 -->
                    <button class="flex-1 px-4 py-2 font-semibold text-center text-gray-600 transition duration-200"
                        :class="activeTab === 1 ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:text-blue-500'"
                        @click="activeTab = 1">
                        Tab 1
                    </button>
                    <!-- Tab 2 -->
                    <button class="flex-1 px-4 py-2 font-semibold text-center text-gray-600 transition duration-200"
                        :class="activeTab === 2 ? 'border-b-4 border-blue-500 text-blue-500' : 'hover:text-blue-500'"
                        @click="activeTab = 2">
                        Tab 2
                    </button>
                </div>

                <!-- Tab Content -->
                <div class="mt-4">
                    <transition name="fade" mode="out-in">
                        <div key="tabs">
                            <!-- Content for Tab 1 -->
                            <div v-if="activeTab === 1" class="p-4 bg-white rounded-lg shadow">
                                <h3 class="text-lg font-bold">Tab 1 Content</h3>
                                <p class="text-gray-600">
                                    This is the content for Tab 1. You can include any information or components here.
                                </p>
                            </div>

                            <!-- Content for Tab 2 -->
                            <div v-if="activeTab === 2" class="p-4 bg-white rounded-lg shadow">
                                <h3 class="text-lg font-bold">Tab 2 Content</h3>
                                <p class="text-gray-600">
                                    This is the content for Tab 2. Feel free to add more details or components here.
                                </p>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const activeTab = ref(1);
</script>

<style scoped>
/* Animation Styles */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
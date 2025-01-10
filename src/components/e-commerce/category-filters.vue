<template>
    <div>
        <div class="mx-auto max-w-8xl">
            <div class="flex justify-between px-6">
                <p>All products</p>
                <div class="flex space-x-4">
                    <i class="fa-solid fa-square"></i>
                    <!-- Button to trigger the sidebar (Only visible on small screens) -->
                    <i class="cursor-pointer fa-solid fa-filter lg:hidden" @click="openSidebar"></i>
                </div>
            </div>
            <!-- Row with 2 columns -->
            <div class="grid grid-cols-12 gap-6 px-6">
                <!-- First column (3/12) - Hidden on small screens, now contains filter options -->
                <div class="hidden col-span-12 lg:col-span-3 lg:block">
                    <!-- Filter Options in the Sidebar (for large screens) -->
                    <div class="p-6">
                        <h3 class="mb-4 font-medium text-gray-700">Filter Options</h3>

                        <div class="space-y-4">
                            <!-- Categories -->
                            <div>
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-gray-600">Categories</h4>
                                    <button @click="toggleSection('categories')" class="text-gray-500">
                                        <i class="fa-solid fa-minus" v-if="isSectionOpen.categories"></i>
                                        <i class="fa-solid fa-plus" v-else></i>
                                    </button>
                                </div>
                                <ul v-show="isSectionOpen.categories" class="space-y-2 text-sm text-gray-600">
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="totes" v-model="filters.categories" value="Totes"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="totes" class="cursor-pointer">Totes</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="backpacks" v-model="filters.categories"
                                            value="Backpacks"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="backpacks" class="cursor-pointer">Backpacks</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="travel-bags" v-model="filters.categories"
                                            value="Travel Bags"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="travel-bags" class="cursor-pointer">Travel Bags</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="hip-bags" v-model="filters.categories"
                                            value="Hip Bags"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="hip-bags" class="cursor-pointer">Hip Bags</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="laptop-sleeves" v-model="filters.categories"
                                            value="Laptop Sleeves"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="laptop-sleeves" class="cursor-pointer">Laptop Sleeves</label>
                                    </li>
                                </ul>
                            </div>

                            <!-- Color Filter -->
                            <div>
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-gray-600">Color</h4>
                                    <button @click="toggleSection('colors')" class="text-gray-500">
                                        <i class="fa-solid fa-minus" v-if="isSectionOpen.colors"></i>
                                        <i class="fa-solid fa-plus" v-else></i>
                                    </button>
                                </div>
                                <ul v-show="isSectionOpen.colors" class="space-y-2 text-sm text-gray-600">
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="red" v-model="filters.colors" value="Red"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="red" class="cursor-pointer">Red</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="blue" v-model="filters.colors" value="Blue"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="blue" class="cursor-pointer">Blue</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="green" v-model="filters.colors" value="Green"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="green" class="cursor-pointer">Green</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="black" v-model="filters.colors" value="Black"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="black" class="cursor-pointer">Black</label>
                                    </li>
                                </ul>
                            </div>

                            <!-- Size Filter -->
                            <div>
                                <div class="flex items-center justify-between">
                                    <h4 class="font-semibold text-gray-600">Size</h4>
                                    <button @click="toggleSection('sizes')" class="text-gray-500">
                                        <i class="fa-solid fa-minus" v-if="isSectionOpen.sizes"></i>
                                        <i class="fa-solid fa-plus" v-else></i>
                                    </button>
                                </div>
                                <ul v-show="isSectionOpen.sizes" class="space-y-2 text-sm text-gray-600">
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="small" v-model="filters.sizes" value="Small"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="small" class="cursor-pointer">Small</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="medium" v-model="filters.sizes" value="Medium"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="medium" class="cursor-pointer">Medium</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="large" v-model="filters.sizes" value="Large"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="large" class="cursor-pointer">Large</label>
                                    </li>
                                    <li class="flex items-center space-x-2">
                                        <input type="checkbox" id="extra-large" v-model="filters.sizes"
                                            value="Extra Large"
                                            class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                        <label for="extra-large" class="cursor-pointer">Extra Large</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Second column (9/12) -->
                <div class="col-span-12 lg:col-span-9">
                    <!-- Product Cards Grid -->
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <!-- Example Product Card 1 -->
                        <div class="p-4 bg-white rounded-lg shadow-md">
                            <img src="https://via.placeholder.com/300x400"
                                class="object-cover w-full h-48 rounded-t-lg">
                            <h3 class="mt-2 text-lg font-semibold">Product Title</h3>
                            <p class="mt-1 text-gray-600">Product Description</p>
                            <button class="px-4 py-2 mt-3 text-white bg-blue-600 rounded-lg">Add to Cart</button>
                        </div>
                        <!-- Example Product Card 2 -->
                        <div class="p-4 bg-white rounded-lg shadow-md">
                            <img src="https://via.placeholder.com/300x400"
                                class="object-cover w-full h-48 rounded-t-lg">
                            <h3 class="mt-2 text-lg font-semibold">Product Title</h3>
                            <p class="mt-1 text-gray-600">Product Description</p>
                            <button class="px-4 py-2 mt-3 text-white bg-blue-600 rounded-lg">Add to Cart</button>
                        </div>
                        <!-- Example Product Card 3 -->
                        <div class="p-4 bg-white rounded-lg shadow-md">
                            <img src="https://via.placeholder.com/300x400"
                                class="object-cover w-full h-48 rounded-t-lg">
                            <h3 class="mt-2 text-lg font-semibold">Product Title</h3>
                            <p class="mt-1 text-gray-600">Product Description</p>
                            <button class="px-4 py-2 mt-3 text-white bg-blue-600 rounded-lg">Add to Cart</button>
                        </div>
                        <!-- Repeat product cards as needed -->
                    </div>
                </div>
            </div>

            <!-- Sidebar that will slide in from the right on small screens -->
            <div v-if="isSidebarVisible"
                class="fixed inset-0 z-50 transition-all duration-300 ease-in-out bg-gray-600 bg-opacity-50">
                <div class="fixed top-0 right-0 w-64 h-full transition-transform transform bg-white shadow-lg"
                    :class="isSidebarVisible ? 'translate-x-0' : 'translate-x-full'">
                    <div class="p-4">
                        <div class="flex justify-between">
                            <h3 class="mb-4 font-medium text-gray-700">Filter Options</h3>
                            <i class="cursor-pointer fa-solid fa-xmark" @click="closeSidebar"></i>
                        </div>
                        <!-- Categories -->
                        <div>
                            <div class="flex items-center justify-between">
                                <h4 class="font-semibold text-gray-600">Categories</h4>
                                <button @click="toggleSection('categories')" class="text-gray-500">
                                    <i class="fa-solid fa-minus" v-if="isSectionOpen.categories"></i>
                                    <i class="fa-solid fa-plus" v-else></i>
                                </button>
                            </div>
                            <ul v-show="isSectionOpen.categories" class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="totes" v-model="filters.categories" value="Totes"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="totes" class="cursor-pointer">Totes</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="backpacks" v-model="filters.categories" value="Backpacks"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="backpacks" class="cursor-pointer">Backpacks</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="travel-bags" v-model="filters.categories"
                                        value="Travel Bags"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="travel-bags" class="cursor-pointer">Travel Bags</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="hip-bags" v-model="filters.categories" value="Hip Bags"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="hip-bags" class="cursor-pointer">Hip Bags</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="laptop-sleeves" v-model="filters.categories"
                                        value="Laptop Sleeves"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="laptop-sleeves" class="cursor-pointer">Laptop Sleeves</label>
                                </li>
                            </ul>
                        </div>

                        <!-- Color Filter -->
                        <div>
                            <div class="flex items-center justify-between">
                                <h4 class="font-semibold text-gray-600">Color</h4>
                                <button @click="toggleSection('colors')" class="text-gray-500">
                                    <i class="fa-solid fa-minus" v-if="isSectionOpen.colors"></i>
                                    <i class="fa-solid fa-plus" v-else></i>
                                </button>
                            </div>
                            <ul v-show="isSectionOpen.colors" class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="red" v-model="filters.colors" value="Red"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="red" class="cursor-pointer">Red</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="blue" v-model="filters.colors" value="Blue"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="blue" class="cursor-pointer">Blue</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="green" v-model="filters.colors" value="Green"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="green" class="cursor-pointer">Green</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="black" v-model="filters.colors" value="Black"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="black" class="cursor-pointer">Black</label>
                                </li>
                            </ul>
                        </div>

                        <!-- Size Filter -->
                        <div>
                            <div class="flex items-center justify-between">
                                <h4 class="font-semibold text-gray-600">Size</h4>
                                <button @click="toggleSection('sizes')" class="text-gray-500">
                                    <i class="fa-solid fa-minus" v-if="isSectionOpen.sizes"></i>
                                    <i class="fa-solid fa-plus" v-else></i>
                                </button>
                            </div>
                            <ul v-show="isSectionOpen.sizes" class="space-y-2 text-sm text-gray-600">
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="small" v-model="filters.sizes" value="Small"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="small" class="cursor-pointer">Small</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="medium" v-model="filters.sizes" value="Medium"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="medium" class="cursor-pointer">Medium</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="large" v-model="filters.sizes" value="Large"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="large" class="cursor-pointer">Large</label>
                                </li>
                                <li class="flex items-center space-x-2">
                                    <input type="checkbox" id="extra-large" v-model="filters.sizes" value="Extra Large"
                                        class="text-blue-600 border-gray-300 rounded focus:ring-blue-500">
                                    <label for="extra-large" class="cursor-pointer">Extra Large</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const isSectionOpen = ref({
    categories: false,
    colors: false,
    sizes: false,
});

// Filters state
const filters = ref({
    categories: [],
    colors: [],
    sizes: []
});

// Sidebar visibility
const isSidebarVisible = ref(false);

// Toggle section visibility
const toggleSection = (section) => {
    isSectionOpen.value[section] = !isSectionOpen.value[section];
};

// Open sidebar
const openSidebar = () => {
    isSidebarVisible.value = true;
};

// Close sidebar
const closeSidebar = () => {
    isSidebarVisible.value = false;
};
</script>
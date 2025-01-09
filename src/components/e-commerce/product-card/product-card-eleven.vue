<template>
    <div>
        <div class="max-w-sm mx-auto">
            <div
                class="relative overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-lg">
                <!-- Product Image -->
                <div class="relative h-64">
                    <img src="https://via.placeholder.com/300x400" alt="Product Image"
                        class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105">
                    <!-- Quick View Button -->
                    <div
                        class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black opacity-0 bg-opacity-30 group-hover:opacity-100">
                        <button
                            class="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                            Quick View
                        </button>
                    </div>
                </div>
                <!-- Product Details -->
                <div class="p-4">
                    <!-- Product Name -->
                    <h5 class="text-lg font-medium text-gray-800 truncate">
                        Premium Leather Bag
                    </h5>
                    <!-- Category -->
                    <p class="mt-1 text-sm text-gray-500">Accessories</p>
                    <!-- Product Price -->
                    <div class="flex items-center justify-between mt-3">
                        <div>
                            <span class="text-xl font-semibold text-gray-900">$250</span>
                            <span class="ml-2 text-sm text-gray-400 line-through">$300</span>
                        </div>
                        <!-- Rating -->
                        <div class="flex items-center space-x-1">
                            <svg class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path
                                    d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span class="text-sm text-gray-600">(4.8)</span>
                        </div>
                    </div>
                    <!-- View Details Button -->
                    <div class="mt-4">
                        <button
                            class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
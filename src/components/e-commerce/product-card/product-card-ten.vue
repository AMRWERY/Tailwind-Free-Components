<template>
    <div>
        <div class="max-w-sm mx-auto">
            <div
                class="relative transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg">
                <!-- Product Image -->
                <div class="relative h-64 overflow-hidden rounded-t-lg">
                    <img src="https://via.placeholder.com/300x400" alt="Product Image"
                        class="object-cover w-full h-full transition-transform duration-500 hover:scale-110">
                    <!-- Discount Badge -->
                    <span class="absolute px-2 py-1 text-xs font-bold text-white bg-red-500 rounded-full top-2 left-2">
                        -20%
                    </span>
                </div>
                <!-- Product Details -->
                <div class="p-4">
                    <!-- Product Name -->
                    <h5 class="text-lg font-bold text-gray-800 truncate">
                        Stylish Modern Chair
                    </h5>
                    <!-- Product Price -->
                    <div class="flex items-center mt-2 mb-4 space-x-2">
                        <span class="text-xl font-semibold text-gray-900">$120</span>
                        <span class="text-sm text-gray-500 line-through">$150</span>
                    </div>
                    <!-- Rating -->
                    <div class="flex items-center mb-4">
                        <svg class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                            </path>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                            </path>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                            </path>
                        </svg>
                        <svg class="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                            </path>
                        </svg>
                        <svg class="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
                            </path>
                        </svg>
                        <span class="ml-2 text-sm text-gray-600">(120 reviews)</span>
                    </div>
                    <!-- Add to Cart Button -->
                    <button
                        class="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
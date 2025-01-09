<template>
    <div>
        <div class="max-w-sm mx-auto">
            <div
                class="relative overflow-hidden transition-shadow duration-300 bg-white border border-gray-200 rounded-lg shadow-md group hover:shadow-lg">
                <!-- Product Image -->
                <div class="relative">
                    <img src="https://via.placeholder.com/300x400" alt="Product Image"
                        class="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105">
                    <!-- Discount Badge -->
                    <span
                        class="absolute px-2 py-1 text-xs font-medium text-white bg-red-500 rounded-md top-2 left-2">-20%</span>
                </div>
                <!-- Product Details -->
                <div class="p-4">
                    <!-- Product Name -->
                    <h5 class="text-lg font-medium text-gray-800 truncate">
                        Elegant Modern Lamp
                    </h5>
                    <!-- Product Description -->
                    <p class="mt-1 text-sm text-gray-500">A sleek and stylish lamp for your home or office decor.</p>
                    <!-- Price and Action -->
                    <div class="flex items-center justify-between mt-4">
                        <!-- Price -->
                        <div>
                            <span class="text-xl font-bold text-gray-900">$120</span>
                            <span class="ml-2 text-sm text-gray-400 line-through">$150</span>
                        </div>
                        <!-- Add to Cart Button -->
                        <button class="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
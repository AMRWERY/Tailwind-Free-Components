<template>
    <div>
        <div class="max-w-6xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <!-- Product Image Section -->
                <div>
                    <div class="relative w-full overflow-hidden bg-gray-100 rounded-lg h-96">
                        <img src="https://via.placeholder.com/500x600" alt="Product Image"
                            class="object-cover w-full h-full transition-transform duration-500 hover:scale-110">
                    </div>
                    <div class="grid grid-cols-4 gap-2 mt-4">
                        <img src="https://via.placeholder.com/100x100" alt="Thumbnail"
                            class="object-cover w-full h-24 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500">
                        <img src="https://via.placeholder.com/100x100" alt="Thumbnail"
                            class="object-cover w-full h-24 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500">
                        <img src="https://via.placeholder.com/100x100" alt="Thumbnail"
                            class="object-cover w-full h-24 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500">
                        <img src="https://via.placeholder.com/100x100" alt="Thumbnail"
                            class="object-cover w-full h-24 rounded-lg cursor-pointer hover:ring-2 hover:ring-blue-500">
                    </div>
                </div>

                <!-- Product Details Section -->
                <div>
                    <h1 class="text-3xl font-bold text-gray-900">
                        Elegant Modern Lamp
                    </h1>
                    <p class="mt-2 text-lg text-gray-600">
                        A sleek and stylish lamp perfect for enhancing the decor of your home or office.
                    </p>

                    <!-- Price and Discount -->
                    <div class="mt-4">
                        <span class="text-2xl font-bold text-gray-900">$120</span>
                        <span class="ml-2 text-lg text-gray-400 line-through">$150</span>
                        <span class="ml-4 text-sm font-medium text-green-600">Save 20%</span>
                    </div>

                    <!-- Rating and Reviews -->
                    <div class="flex items-center mt-4 space-x-2">
                        <div class="flex">
                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.894a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.322 2.416a1 1 0 00-.364 1.118l1.26 3.894c.3.921-.755 1.688-1.54 1.118l-3.322-2.416a1 1 0 00-1.176 0l-3.322 2.416c-.784.57-1.838-.197-1.54-1.118l1.26-3.894a1 1 0 00-.364-1.118L2.622 8.83c-.784-.57-.381-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.894z" />
                            </svg>
                            <!-- Repeat 4 more times for stars -->
                        </div>
                        <span class="text-gray-600">(45 Reviews)</span>
                    </div>

                    <!-- Description -->
                    <div class="mt-6">
                        <h2 class="text-lg font-semibold text-gray-800">Description</h2>
                        <p class="mt-2 text-gray-600">
                            This modern lamp features a sleek design, durable materials, and a warm glow to create the
                            perfect
                            ambiance for your space. Suitable for living rooms, bedrooms, and offices.
                        </p>
                    </div>

                    <!-- Features -->
                    <div class="mt-6">
                        <h2 class="text-lg font-semibold text-gray-800">Features</h2>
                        <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                            <li>Energy-efficient LED light</li>
                            <li>Adjustable brightness levels</li>
                            <li>Durable metal frame</li>
                            <li>Modern and minimalistic design</li>
                        </ul>
                    </div>

                    <!-- Quantity Selector and Add to Cart -->
                    <div class="flex items-center mt-6 space-x-4">
                        <!-- Quantity Selector -->
                        <div class="flex items-center border rounded-lg">
                            <button class="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                            <input type="number" value="1" class="w-12 text-center border-none focus:ring-0">
                            <button class="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                        </div>

                        <!-- Add to Cart Button -->
                        <button class="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
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
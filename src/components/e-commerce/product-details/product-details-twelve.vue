<template>
    <div>
        <div class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <!-- Product Image Section -->
                <div class="space-y-6">
                    <div class="relative w-full overflow-hidden bg-gray-100 rounded-lg h-96">
                        <img src="https://via.placeholder.com/600x800" alt="Product Image"
                            class="object-cover w-full h-full">
                    </div>
                    <div class="grid grid-cols-4 gap-4">
                        <img src="https://via.placeholder.com/150" alt="Thumbnail"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500">
                        <img src="https://via.placeholder.com/150" alt="Thumbnail"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500">
                        <img src="https://via.placeholder.com/150" alt="Thumbnail"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500">
                        <img src="https://via.placeholder.com/150" alt="Thumbnail"
                            class="object-cover w-full h-24 border rounded-lg cursor-pointer hover:border-blue-500">
                    </div>
                </div>

                <!-- Product Details Section -->
                <div class="space-y-8">
                    <!-- Product Title -->
                    <div>
                        <h1 class="text-4xl font-bold text-gray-800">
                            Modern Wooden Chair
                        </h1>
                        <p class="mt-2 text-sm text-gray-600">Category: Furniture</p>
                    </div>

                    <!-- Pricing -->
                    <div class="flex items-center space-x-4">
                        <span class="text-3xl font-bold text-gray-800">$299</span>
                        <span class="text-lg text-gray-400 line-through">$399</span>
                        <span class="font-medium text-green-600">Save 25%</span>
                    </div>

                    <!-- Ratings -->
                    <div class="flex items-center space-x-2">
                        <div class="flex">
                            <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.894a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.322 2.416a1 1 0 00-.364 1.118l1.26 3.894c.3.921-.755 1.688-1.54 1.118l-3.322-2.416a1 1 0 00-1.176 0l-3.322 2.416c-.784.57-1.838-.197-1.54-1.118l1.26-3.894a1 1 0 00-.364-1.118L2.622 8.83c-.784-.57-.381-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.894z" />
                            </svg>
                            <!-- Repeat for other stars -->
                        </div>
                        <span class="text-gray-600">(120 Reviews)</span>
                    </div>

                    <!-- Description -->
                    <div>
                        <h2 class="text-lg font-semibold text-gray-800">Description</h2>
                        <p class="mt-2 text-gray-600">
                            Crafted from premium wood, this modern chair combines style and comfort. Ideal for any
                            living or
                            workspace, it features a durable build and a sleek design.
                        </p>
                    </div>

                    <!-- Features -->
                    <div>
                        <h2 class="text-lg font-semibold text-gray-800">Features</h2>
                        <ul class="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                            <li>Ergonomic design for maximum comfort</li>
                            <li>High-quality wood construction</li>
                            <li>Available in multiple finishes</li>
                            <li>Perfect for homes or offices</li>
                        </ul>
                    </div>

                    <!-- Actions -->
                    <div class="space-y-4">
                        <!-- Quantity Selector -->
                        <div class="flex items-center space-x-4">
                            <label for="quantity" class="text-gray-600">Quantity:</label>
                            <div class="flex items-center border rounded-lg">
                                <button class="px-4 py-2 text-gray-600 hover:bg-gray-100">-</button>
                                <input id="quantity" type="number" value="1"
                                    class="w-12 text-center border-none focus:ring-0">
                                <button class="px-4 py-2 text-gray-600 hover:bg-gray-100">+</button>
                            </div>
                        </div>

                        <!-- Add to Cart Button -->
                        <button
                            class="w-full py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700">
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
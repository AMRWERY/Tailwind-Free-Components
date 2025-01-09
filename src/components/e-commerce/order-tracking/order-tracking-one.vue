<template>
    <div>
        <div class="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <h1 class="mb-8 text-3xl font-bold text-center text-gray-800">Track Your Order</h1>

            <!-- Order Details -->
            <div class="p-6 mb-8 bg-white rounded-lg shadow">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600">Order Number</p>
                        <p class="text-lg font-medium text-gray-800">#123456789</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Estimated Delivery</p>
                        <p class="text-lg font-medium text-gray-800">Jan 15, 2025</p>
                    </div>
                </div>
            </div>

            <!-- Progress Tracker -->
            <div class="p-6 bg-white rounded-lg shadow">
                <h2 class="mb-6 text-xl font-semibold text-gray-800">Order Status</h2>

                <div class="relative">
                    <div class="absolute inset-0 flex items-center justify-between h-2 bg-gray-200 rounded-full">
                        <div class="w-3/4 h-2 bg-blue-600 rounded-full"></div>
                    </div>

                    <div class="relative z-10 flex justify-between">
                        <!-- Step 1 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 mx-auto font-bold text-white bg-blue-600 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm text-gray-800">Order Placed</p>
                            <p class="text-xs text-gray-500">Jan 10, 2025</p>
                        </div>

                        <!-- Step 2 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 mx-auto font-bold text-white bg-blue-600 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm text-gray-800">Processing</p>
                            <p class="text-xs text-gray-500">Jan 11, 2025</p>
                        </div>

                        <!-- Step 3 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 mx-auto font-bold text-white bg-blue-600 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm text-gray-800">Shipped</p>
                            <p class="text-xs text-gray-500">Jan 12, 2025</p>
                        </div>

                        <!-- Step 4 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 mx-auto font-bold text-gray-600 bg-gray-300 rounded-full">
                                4
                            </div>
                            <p class="mt-2 text-sm text-gray-800">Out for Delivery</p>
                        </div>

                        <!-- Step 5 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 mx-auto font-bold text-gray-600 bg-gray-300 rounded-full">
                                5
                            </div>
                            <p class="mt-2 text-sm text-gray-800">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Items -->
            <div class="p-6 mt-8 bg-white rounded-lg shadow">
                <h2 class="mb-6 text-xl font-semibold text-gray-800">Order Items</h2>
                <div class="space-y-4">
                    <!-- Item 1 -->
                    <div class="flex items-center">
                        <div class="w-20 h-20 overflow-hidden bg-gray-100 rounded-lg">
                            <img src="https://via.placeholder.com/100" alt="Product" class="object-cover w-full h-full">
                        </div>
                        <div class="ml-4">
                            <p class="text-lg font-medium text-gray-800">Modern Wooden Chair</p>
                            <p class="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$299</div>
                    </div>

                    <!-- Item 2 -->
                    <div class="flex items-center">
                        <div class="w-20 h-20 overflow-hidden bg-gray-100 rounded-lg">
                            <img src="https://via.placeholder.com/100" alt="Product" class="object-cover w-full h-full">
                        </div>
                        <div class="ml-4">
                            <p class="text-lg font-medium text-gray-800">Elegant Sofa</p>
                            <p class="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$899</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
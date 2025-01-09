<template>
    <div>
        <div class="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <h1 class="mb-8 text-3xl font-bold text-center text-gray-800">Order Tracking</h1>

            <!-- Order Information -->
            <div class="p-6 mb-8 rounded-lg shadow bg-gray-50">
                <div class="flex flex-wrap items-center justify-between">
                    <div class="mb-4 sm:mb-0">
                        <p class="text-sm text-gray-600">Order Number</p>
                        <p class="text-xl font-semibold text-gray-800">#987654321</p>
                    </div>
                    <div class="mb-4 sm:mb-0">
                        <p class="text-sm text-gray-600">Order Date</p>
                        <p class="text-lg font-medium text-gray-800">Jan 5, 2025</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Estimated Delivery</p>
                        <p class="text-lg font-medium text-gray-800">Jan 12, 2025</p>
                    </div>
                </div>
            </div>

            <!-- Tracking Progress -->
            <div class="p-6 mb-8 bg-white rounded-lg shadow">
                <h2 class="mb-4 text-xl font-semibold text-gray-800">Tracking Progress</h2>

                <div class="relative">
                    <div class="absolute w-full h-1 bg-gray-200 rounded-full"></div>
                    <div class="absolute w-4/5 h-1 bg-green-500 rounded-full"></div>

                    <div class="flex items-center justify-between mt-4">
                        <!-- Step 1 -->
                        <div class="text-center">
                            <div class="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm font-medium text-gray-800">Order Placed</p>
                            <p class="text-xs text-gray-500">Jan 5</p>
                        </div>

                        <!-- Step 2 -->
                        <div class="text-center">
                            <div class="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm font-medium text-gray-800">Processing</p>
                            <p class="text-xs text-gray-500">Jan 6</p>
                        </div>

                        <!-- Step 3 -->
                        <div class="text-center">
                            <div class="flex items-center justify-center w-8 h-8 text-white bg-green-500 rounded-full">
                                ✓
                            </div>
                            <p class="mt-2 text-sm font-medium text-gray-800">Shipped</p>
                            <p class="text-xs text-gray-500">Jan 8</p>
                        </div>

                        <!-- Step 4 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 text-gray-600 bg-gray-300 rounded-full">
                                4
                            </div>
                            <p class="mt-2 text-sm font-medium text-gray-800">Out for Delivery</p>
                        </div>

                        <!-- Step 5 -->
                        <div class="text-center">
                            <div
                                class="flex items-center justify-center w-8 h-8 text-gray-600 bg-gray-300 rounded-full">
                                5
                            </div>
                            <p class="mt-2 text-sm font-medium text-gray-800">Delivered</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Order Items -->
            <div class="p-6 rounded-lg shadow bg-gray-50">
                <h2 class="mb-6 text-xl font-semibold text-gray-800">Order Items</h2>
                <div class="space-y-6">
                    <!-- Item 1 -->
                    <div class="flex items-center">
                        <div class="w-20 h-20 overflow-hidden bg-gray-100 rounded-lg">
                            <img src="https://via.placeholder.com/150" alt="Product" class="object-cover w-full h-full">
                        </div>
                        <div class="ml-4">
                            <p class="text-lg font-medium text-gray-800">Premium Sneakers</p>
                            <p class="text-sm text-gray-600">Qty: 2</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$200</div>
                    </div>

                    <!-- Item 2 -->
                    <div class="flex items-center">
                        <div class="w-20 h-20 overflow-hidden bg-gray-100 rounded-lg">
                            <img src="https://via.placeholder.com/150" alt="Product" class="object-cover w-full h-full">
                        </div>
                        <div class="ml-4">
                            <p class="text-lg font-medium text-gray-800">Leather Wallet</p>
                            <p class="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$50</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
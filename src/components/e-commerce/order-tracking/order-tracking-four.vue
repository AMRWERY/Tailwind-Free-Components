<template>
    <div>
        <div class="max-w-4xl px-6 py-12 mx-auto">
            <h1 class="mb-8 text-4xl font-bold text-center text-gray-800">Order Tracking</h1>

            <!-- Order Details -->
            <div class="p-6 mb-12 rounded-lg shadow-lg bg-gray-50">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                        <p class="text-sm text-gray-500">Order Number</p>
                        <p class="text-xl font-semibold text-gray-800">#ORD123456</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Placed On</p>
                        <p class="text-lg text-gray-800">Jan 5, 2025</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-500">Total Amount</p>
                        <p class="text-lg font-medium text-gray-800">$245.00</p>
                    </div>
                </div>
            </div>

            <!-- Timeline -->
            <div class="relative border-l border-gray-200">
                <!-- Step 1 -->
                <div class="relative flex items-start pl-6 mb-8">
                    <div
                        class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">Order Placed</h3>
                        <p class="text-sm text-gray-500">Jan 5, 2025 - 10:00 AM</p>
                    </div>
                </div>

                <!-- Step 2 -->
                <div class="relative flex items-start pl-6 mb-8">
                    <div
                        class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">Order Confirmed</h3>
                        <p class="text-sm text-gray-500">Jan 6, 2025 - 8:30 AM</p>
                    </div>
                </div>

                <!-- Step 3 -->
                <div class="relative flex items-start pl-6 mb-8">
                    <div
                        class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-white bg-green-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">Shipped</h3>
                        <p class="text-sm text-gray-500">Jan 7, 2025 - 3:00 PM</p>
                    </div>
                </div>

                <!-- Step 4 -->
                <div class="relative flex items-start pl-6 mb-8">
                    <div
                        class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 16l4-4 4 4M8 8l4 4 4-4" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">Out for Delivery</h3>
                        <p class="text-sm text-gray-500">Expected: Jan 8, 2025</p>
                    </div>
                </div>

                <!-- Step 5 -->
                <div class="relative flex items-start pl-6 mb-8">
                    <div
                        class="absolute top-0 left-0 flex items-center justify-center w-6 h-6 text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M8 16l4-4 4 4M8 8l4 4 4-4" />
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800">Delivered</h3>
                        <p class="text-sm text-gray-500">Expected: Jan 8, 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
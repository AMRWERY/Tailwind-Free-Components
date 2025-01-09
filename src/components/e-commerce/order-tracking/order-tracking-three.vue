<template>
    <div>
        <div class="max-w-5xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
            <h1 class="mb-12 text-3xl font-bold text-center text-gray-800">Track Your Order</h1>

            <!-- Order Summary -->
            <div class="p-6 mb-8 rounded-lg shadow-md bg-gray-50">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div>
                        <p class="text-sm text-gray-600">Order Number</p>
                        <p class="text-xl font-semibold text-gray-800">#123456789</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Order Date</p>
                        <p class="text-lg font-medium text-gray-800">Jan 4, 2025</p>
                    </div>
                    <div>
                        <p class="text-sm text-gray-600">Total Amount</p>
                        <p class="text-lg font-medium text-gray-800">$350.00</p>
                    </div>
                </div>
            </div>

            <!-- Tracking Steps -->
            <div class="p-6 mb-8 bg-white rounded-lg shadow-md">
                <h2 class="mb-6 text-2xl font-semibold text-gray-800">Tracking Progress</h2>

                <!-- Steps -->
                <div class="space-y-6">
                    <!-- Step 1 -->
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full">
                            1
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">Order Placed</p>
                            <p class="text-sm text-gray-500">Jan 4, 2025 - 9:00 AM</p>
                        </div>
                        <div class="ml-auto text-green-500">Completed</div>
                    </div>
                    <div class="w-full h-1 bg-green-500 rounded-full"></div>

                    <!-- Step 2 -->
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full">
                            2
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">Processing</p>
                            <p class="text-sm text-gray-500">Jan 5, 2025 - 11:30 AM</p>
                        </div>
                        <div class="ml-auto text-green-500">Completed</div>
                    </div>
                    <div class="w-full h-1 bg-green-500 rounded-full"></div>

                    <!-- Step 3 -->
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 font-bold text-white bg-green-500 rounded-full">
                            3
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">Shipped</p>
                            <p class="text-sm text-gray-500">Jan 6, 2025 - 2:00 PM</p>
                        </div>
                        <div class="ml-auto text-green-500">Completed</div>
                    </div>
                    <div class="w-full h-1 bg-gray-300 rounded-full"></div>

                    <!-- Step 4 -->
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 font-bold text-gray-500 bg-gray-300 rounded-full">
                            4
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">Out for Delivery</p>
                            <p class="text-sm text-gray-500">Expected: Jan 7, 2025</p>
                        </div>
                        <div class="ml-auto text-gray-500">Pending</div>
                    </div>
                    <div class="w-full h-1 bg-gray-300 rounded-full"></div>

                    <!-- Step 5 -->
                    <div class="flex items-center space-x-4">
                        <div
                            class="flex items-center justify-center w-10 h-10 font-bold text-gray-500 bg-gray-300 rounded-full">
                            5
                        </div>
                        <div>
                            <p class="text-lg font-medium text-gray-800">Delivered</p>
                            <p class="text-sm text-gray-500">Expected: Jan 7, 2025</p>
                        </div>
                        <div class="ml-auto text-gray-500">Pending</div>
                    </div>
                </div>
            </div>

            <!-- Order Items -->
            <div class="p-6 rounded-lg shadow-md bg-gray-50">
                <h2 class="mb-6 text-2xl font-semibold text-gray-800">Order Items</h2>
                <div class="space-y-4">
                    <!-- Item 1 -->
                    <div class="flex items-center space-x-4">
                        <img src="https://via.placeholder.com/80" alt="Product"
                            class="object-cover w-20 h-20 rounded-lg">
                        <div>
                            <p class="text-lg font-medium text-gray-800">Wireless Headphones</p>
                            <p class="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$150</div>
                    </div>

                    <!-- Item 2 -->
                    <div class="flex items-center space-x-4">
                        <img src="https://via.placeholder.com/80" alt="Product"
                            class="object-cover w-20 h-20 rounded-lg">
                        <div>
                            <p class="text-lg font-medium text-gray-800">Smartphone Case</p>
                            <p class="text-sm text-gray-600">Qty: 2</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$50</div>
                    </div>

                    <!-- Item 3 -->
                    <div class="flex items-center space-x-4">
                        <img src="https://via.placeholder.com/80" alt="Product"
                            class="object-cover w-20 h-20 rounded-lg">
                        <div>
                            <p class="text-lg font-medium text-gray-800">USB Charger</p>
                            <p class="text-sm text-gray-600">Qty: 1</p>
                        </div>
                        <div class="ml-auto text-lg font-medium text-gray-800">$30</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
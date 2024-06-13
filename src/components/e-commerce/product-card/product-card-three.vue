<template>
    <div
        class="mx-auto overflow-hidden duration-300 transform bg-white rounded-lg shadow-md mt-11 w-80 dark:bg-slate-800 hover:scale-105 hover:shadow-lg">
        <img class="object-cover object-center w-full h-48"
            src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Product Image" />
        <div class="p-4">
            <h2 class="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Product Name
            </h2>
            <p class="mb-2 text-base text-gray-700 dark:text-gray-300">
                Product description goes here.
            </p>
            <div class="flex items-center">
                <p class="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                    $20.00
                </p>
                <p class="text-base font-medium text-gray-500 line-through dark:text-gray-300">
                    $25.00
                </p>
                <p class="ml-auto text-base font-medium text-green-500">20% off</p>
            </div>
        </div>
    </div>
</template>
<template>
    <nav class="bg-white border-gray-200 py-2.50">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
            <router-link to="#" class="flex items-center">
                <img src="https://justfields.com/storage/projects/7M5rV059/sale-tag.jpg" class="h-9" alt="Bkam Logo">
                <span
                    class="self-center text-xl font-semibold text-transparent whitespace-nowrap bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text hover:from-blue-700 hover:to-green-700">Bkam</span>
                <ol class="inline-flex ml-3 space-x-1">
                    <li class="self-center text-sm font-normal text-black whitespace-nowrap">Egypt</li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li class="self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">Kuwait
                    </li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li class="self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">KSA
                    </li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li class="self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">UAE
                    </li>
                </ol>
            </router-link>
            <div class="flex items-center lg:order-2">
                <div class="hidden mt-2 mr-4 sm:inline-block">
                    <span></span>
                </div>

                <ol class="inline-flex ml-3 space-x-1">
                    <li class="self-center text-sm font-normal text-black whitespace-nowrap">
                        <nuxt-link to="/"
                            class="text-sm font-medium text-gray-700 hover:text-gray-800 sm:mr-2 lg:mr-0">Home</nuxt-link>
                    </li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li class="self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">العربيه
                    </li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li
                        class="flex items-center self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">
                        <img src="https://justfields.com/storage/projects/7M5rV059/profile.png" class="h-auto w-7">
                        <nuxt-link to="#" class="ml-1">Amr Mohamed</nuxt-link>
                    </li>
                    <span class="w-1 auto me-2.5 text-gray-400">|</span>
                    <li class="self-center text-sm font-normal text-gray-400 whitespace-nowrap hover:text-black">
                        <img src="https://justfields.com/storage/projects/7M5rV059/notification-bell-svgrepo-com.jpg"
                            class="h-auto w-7">
                    </li>
                </ol>

                <button data-collapse-toggle="mobile-menu-2" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mobile-menu-2" aria-expanded="true">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>

</script>
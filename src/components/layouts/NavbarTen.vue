<template>
    <header class="sticky top-0 z-40 bg-white shadow-sm shadow-light-500">
        <div class="flex items-center justify-between py-4">
            <div class="flex items-center">
                <a aria-current="page" href="/" class="router-link-active router-link-exact-active md:w-[160px]">
                    <div class="flex font-bold text-lg gap-2 items-center">
                        <img src="" width="32" height="32">
                        <span>Ship-IT</span>
                    </div>
                </a>
            </div>

            <div class="flex gap-4 justify-end items-center md:w-[160px] flex-1 ml-auto">
                <form
                    class="relative items-center flex-1 -space-x-px rounded-md shadow-sm hidden sm:inline-flex max-w-[320px] w-[60%]">

                    <i class="fa-solid fa-magnifying-glass absolute z-10 opacity-50 pointer-events-none left-2" width="20px"
                        height="20px"></i>
                    <input type="text" placeholder="Search Products..."
                        class="z-0 inline-flex items-center w-full p-2 pl-10 text-sm text-gray-500 border border-gray-300 rounded-md shadow-inner outline-none bg-gray-50 shadow-gray-200">
                </form>

                <div class="cursor-pointer relative">
                    <i class="fa-solid fa-earth-africa mr-1 md:mr-0" width="20px" height="20px"></i>
                </div>

                <div class="cursor-pointer relative">
                    <i class="fa-solid fa-cart-shopping mr-1 md:mr-0" width="20px" height="20px"></i>
                </div>

                <router-link to="">
                    <button type="button"
                        class="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Login
                    </button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>

</script>
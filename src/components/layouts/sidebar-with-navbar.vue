<template>
  <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-700">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
      <div class="items-center hidden space-x-3 lg:flex">
        <img src="https://justfields.com/storage/projects/7M5rV059/day-134.jpg" class="h-6 mr-3 sm:h-9">
        <router-link to="/"
          class="inline-flex text-white relative items-center py-[10px] px-[10px] text-sm font-medium hover:text-gray-300">Home</router-link>
        <nuxt-link to=""
          class="inline-flex text-white relative items-center py-[10px] px-[10px] text-sm font-medium hover:text-gray-300">Our
          Services</nuxt-link>
        <router-link to=""
          class="inline-flex text-white relative items-center py-[10px] px-[10px] text-sm font-medium hover:text-gray-300">About
          Us</router-link>
        <router-link to=""
          class="inline-flex text-white relative items-center py-[10px] px-[10px] text-sm font-medium hover:text-gray-300">Contact
          Us</router-link>
      </div>
      <div class="flex items-center ml-auto space-x-2 lg:order-2">
        <div class="hidden mt-2 mr-4 sm:inline-block">
          <span></span>
        </div>

        <div class="relative">
          <span
            class="absolute top-0 inline-flex items-center justify-center w-4 h-4 -mt-1 -mr-2 text-xs text-white bg-red-500 rounded-full end-1">
            2
          </span>
          <button type="button" class="relative p-1 text-gray-400 rounded-full hover:text-white">
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Cart</span>
            <icon name="clarity:shopping-cart-solid" aria-hidden="true" />
          </button>
        </div>
        <button type="button" class="relative p-1 text-gray-400 rounded-full hover:text-white">
          <span class="absolute -inset-1.5" />
          <span class="sr-only">Translation</span>
          <icon name="material-symbols:g-translate-sharp" aria-hidden="true" />
        </button>
        <button type="button" @click="toggleTheme" class="relative p-1 text-gray-400 rounded-full hover:text-white">
          <span class="absolute -inset-1.5" />
          <span class="sr-only">Toggle Theme</span>
          <icon :name="theme === 'dark' ? 'mi:moon' : 'clarity:sun-solid'" aria-hidden="true" />
        </button>
        <router-link to="" type="button"
          class="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</router-link>
        <button data-collapse-toggle="mobile-menu-2" type="button" @click="toggleSideBar"
          class="relative p-1 text-gray-400 rounded-full hover:text-white lg:hidden" aria-controls="mobile-menu-2"
          aria-expanded="true">
          <span class="sr-only">Open main menu</span>
          <icon name="grommet-icons:menu" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </nav>

  <div :class="{ 'transform translate-x-0': showSide, 'transform -translate-x-full': !showSide }"
    class="fixed left-0 z-50 w-[250px] bg-gray-800 overflow-y-auto transition-transform duration-300 ease-in-out">
    <div class="h-[calc(100vh-50px)] bg-gray-700 py-[20px]">
      <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
        <div class="flex flex-col justify-between space-y-[10px]">
          <router-link to=""
            class="inline-flex text-white relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
            <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"></path>
            </svg>
            Home
          </router-link>
          <router-link to=""
            class="inline-flex text-white relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
            <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z">
              </path>
            </svg>
            Profile
          </router-link>
          <router-link to=""
            class="inline-flex text-white relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
            <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                clip-rule="evenodd"></path>
            </svg>
            Messages
          </router-link>
          <router-link to=""
            class="inline-flex text-white relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
            <svg aria-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z"
                clip-rule="evenodd"></path>
            </svg>
            Download
          </router-link>
        </div>
        <div class="h-[50px]">
          <div>
            <button type="button"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue'

const showSide = ref(false)

const toggleSideBar = () => {
  showSide.value = !showSide.value;
}
</script>
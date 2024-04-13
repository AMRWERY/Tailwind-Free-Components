<template>
    <section class="
        relative
        bg-[url(https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg)]
        bg-cover bg-center bg-no-repeat
      ">
        <div class="absolute inset-0  bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div class="relative max-w-screen-xl px-4 py-32 mx-auto  sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Why
                    <strong class="block font-extrabold text-rose-700"> Tripma? </strong>
                </h1>

                <transition name="fade" mode="out-in">
                    <p class="max-w-lg mt-4 text-2xl font-semibold text-gray-700  sm:text-xl/relaxed" :key="currentIndex">
                        {{ currentStatement }}
                    </p>
                </transition>

                <div class="flex flex-wrap gap-4 mt-8 text-center">
                    <button type="button" class="inline-flex justify-center w-full px-3 py-2 mt-3 font-semibold text-white transition duration-300 ease-in-out delay-150 bg-transparent rounded-md shadow-sm  text-md hover:text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:-translate-y-1 hover:scale-110">
                        <i class="mt-1 mr-2 fa-solid fa-plane"></i>Flights
                    </button>
                    <button type="button" class="inline-flex justify-center w-full px-3 py-2 mt-3 font-semibold text-white transition duration-300 ease-in-out delay-150 bg-transparent rounded-md shadow-sm  text-md hover:text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:-translate-y-1 hover:scale-110">
                        <i class="mt-1 mr-2 fa-solid fa-car-side"></i>Car Rentals
                    </button>
                    <button type="button" class="inline-flex justify-center w-full px-3 py-2 mt-3 font-semibold text-white transition duration-300 ease-in-out delay-150 bg-transparent rounded-md shadow-sm  text-md hover:text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:-translate-y-1 hover:scale-110">
                        <i class="mt-1 mr-2 fa-solid fa-austral-sign"></i>Attractions
                    </button>
                    <button type="button" class="inline-flex justify-center w-full px-3 py-2 mt-3 font-semibold text-white transition duration-300 ease-in-out delay-150 bg-transparent rounded-md shadow-sm  text-md hover:text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto hover:-translate-y-1 hover:scale-110">
                        <i class="mt-1 mr-2 fa-solid fa-taxi"></i>Airport Taxis
                    </button>
                </div>
                <div class="absolute flex gap-4 bottom-4 right-4">
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-blue-600 border-0 rounded-full  w-7 h-7 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-facebook-f"></i>
                    </button>
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 border-0 rounded-full  w-7 h-7 bg-gradient-to-br from-pink-500 to-fuchsia-500 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-instagram"></i>
                    </button>
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-blue-400 border-0 rounded-full  w-7 h-7 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-twitter"></i>
                    </button>
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-green-400 border-0 rounded-full  w-7 h-7 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-whatsapp"></i>
                    </button>
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-gray-800 border-0 rounded-full  w-7 h-7 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-github"></i>
                    </button>
                    <button class="inline-flex items-center justify-center p-0 ml-4 text-white transition duration-300 ease-in-out delay-150 bg-blue-600 border-0 rounded-full  w-7 h-7 hover:-translate-y-1 hover:scale-110">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue';

const statements = [
    'Your wings to the world',
    'Where dreams take flight',
    'Your journey starts here',
    'Where every journey begins',
    'Your gateway to the skies',
    'Fly anywhere, anytime, hassle-free',
    'Discover a world of destinations',
    'Flight bookings made simple',
];

let currentIndex = ref(0);

const currentStatement = computed(() => statements[currentIndex.value]);

function nextStatement() {
    currentIndex.value = (currentIndex.value + 1) % statements.length;
}

onMounted(() => {
    setInterval(nextStatement, 5000);
});
</script>

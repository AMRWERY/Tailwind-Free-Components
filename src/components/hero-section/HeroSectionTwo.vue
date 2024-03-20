<template>
    <section class="
        relative
        bg-[url(https://themehut.co/html/geair/assets/img/slider/slider_bg01.jpg)]
        bg-cover bg-center bg-no-repeat
      ">
        <div class="
          absolute
          inset-0
          bg-white/75
          sm:bg-transparent sm:from-white/95 sm:to-white/25
          ltr:sm:bg-gradient-to-r
          rtl:sm:bg-gradient-to-l
        "></div>

        <div class="
          relative
          mx-auto
          max-w-screen-xl
          px-4
          py-32
          sm:px-6
          lg:flex lg:h-screen lg:items-center lg:px-8
        ">
            <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    Why
                    <strong class="block font-extrabold text-rose-700"> Tripma ? </strong>
                </h1>

                <transition name="fade" mode="out-in">
                    <p class="
                mt-4
                max-w-lg
                font-semibold
                text-2xl text-gray-700
                sm:text-xl/relaxed
              " :key="currentIndex">
                        {{ currentStatement }}
                    </p>
                </transition>

                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <button type="button" class="
                mt-3
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-transparent
                px-3
                py-2
                text-md
                font-semibold
                text-white
                hover:text-gray-900
                shadow-sm
                ring-1 ring-inset ring-gray-300
                hover:bg-gray-50
                sm:mt-0 sm:w-auto
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-solid fa-plane mr-2 mt-1"></i>Flights
                    </button>
                    <button type="button" class="
                mt-3
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-transparent
                px-3
                py-2
                text-md
                font-semibold
                text-white
                hover:text-gray-900
                shadow-sm
                ring-1 ring-inset ring-gray-300
                hover:bg-gray-50
                sm:mt-0 sm:w-auto
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-solid fa-car-side mr-2 mt-1"></i>Car Rentals
                    </button>
                    <button type="button" class="
                mt-3
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-transparent
                px-3
                py-2
                text-md
                font-semibold
                text-white
                hover:text-gray-900
                shadow-sm
                ring-1 ring-inset ring-gray-300
                hover:bg-gray-50
                sm:mt-0 sm:w-auto
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-solid fa-austral-sign mr-2 mt-1"></i>Attractions
                    </button>
                    <button type="button" class="
                mt-3
                inline-flex
                w-full
                justify-center
                rounded-md
                bg-transparent
                px-3
                py-2
                text-md
                font-semibold
                text-white
                hover:text-gray-900
                shadow-sm
                ring-1 ring-inset ring-gray-300
                hover:bg-gray-50
                sm:mt-0 sm:w-auto
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-solid fa-taxi mr-2 mt-1"></i>Airport Taxis
                    </button>
                </div>
                <div class="absolute bottom-4 right-4 flex gap-4">
                    <button class="
                rounded-full
                w-7
                h-7
                bg-blue-600
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-brands fa-facebook-f"></i>
                    </button>
                    <button class="
                rounded-full
                w-7
                h-7
                bg-gradient-to-br
                from-pink-500
                to-fuchsia-500
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-brands fa-instagram"></i>
                    </button>
                    <button class="
                rounded-full
                w-7
                h-7
                bg-blue-400
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-brands fa-twitter"></i>
                    </button>
                    <button class="
                rounded-full
                w-7
                h-7
                bg-green-400
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-brands fa-whatsapp"></i>
                    </button>
                    <button class="
                rounded-full
                w-7
                h-7
                bg-gray-800
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
                        <i class="fa-brands fa-github"></i>
                    </button>
                    <button class="
                rounded-full
                w-7
                h-7
                bg-blue-600
                text-white
                p-0
                border-0
                inline-flex
                items-center
                justify-center
                ml-4
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              ">
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
  
<template>
    <div class="text-center">
        <h1 class="my-10 text-4xl text-orange-500 underline">Our Service</h1>
        <p class="text-lg text-gray-500">
            We offer you travel services in order to facilitate everything on your
            trip and provide full fun. Only you have to <br />decide and we have to
            meet
        </p>
    </div>
    <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <div class="
          grid grid-cols-1
          gap-x-6 gap-y-10
          sm:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-2 xl:gap-x-8
          mt-8
        ">
            <router-link v-for="card in cards" :key="card" to="" class="group">
                <div class="
              aspect-h-1 aspect-w-1
              w-full
              overflow-hidden
              rounded-lg
              bg-gray-200
              xl:aspect-h-6 xl:aspect-w-7
            ">
                    <img :src="card.img" class="
                h-full
                w-full
                object-cover object-center
                group-hover:opacity-75
                transition
                ease-in-out
                delay-150
                hover:-translate-y-1 hover:scale-110
                duration-300
              " />
                </div>
                <div class="flex">
                    <p class="mt-3 text-lg font-medium text-blue-600">{{ card.title }}</p>
                </div>

                <h3 class="mt-2 text-sm text-gray-700">{{ card.desc }}</h3>
            </router-link>
        </div>
    </div>
    <div class="text-center mb-10">
        <h1 class="my-10 text-4xl text-orange-500 underline">
            Tripma Applications
        </h1>
        <p class="text-lg text-gray-500">
            You can now enjoy the services of the SeasonsTour easily through mobile
            applications for the SeasonsTour on <br />the Google Store and the Apple
            Store
        </p>
        <div class="flex items-center justify-center space-x-5 mt-5">
            <a href="#">
                <img src="https://seasonstours.netlify.app/images/googleplay.png" class="xl:h-24" />
            </a>
            <a href="#">
                <img src="https://seasonstours.netlify.app/images/googleplay.png" class="xl:h-24" />
            </a>
        </div>
        <div class="flex justify-center mt-8">
            <button type="button" class="
            rounded-lg
            bg-gray-500
            h-14
            px-12
            py-3
            text-sm
            font-medium
            text-white
            shadow
            hover:bg-gray-600
            focus:outline-none
            active:bg-gray-500
            sm:w-auto
            transition
            ease-in-out
            delay-150
            hover:-translate-y-1 hover:scale-110
            duration-300
          ">
                Read More
            </button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';

const cards = ref([
    {
        title: 'Flight Reservation',
        desc: 'You no longer have to worry about your flight booking, you now have a whole team tasked with fulfilling your request in this regard and making sure that everything is ready for your convenience.',
        img: 'https://justfields.com/storage/projects/7M5rV059/flights.png',
    },
    {
        title: 'Programmes',
        desc: 'You can choose what suits you from our integrated programs and provide everything you need during your trip, starting from flight reservations, hotel reservations, car rental and all the services you may need during your trip.',
        img: 'https://justfields.com/storage/projects/7M5rV059/programs.png',
    },
    {
        title: 'Hotel Reservation',
        desc: 'We are in Seasons Tour. We do not care about anything but your comfort , so we were keen to search for the best hotels with the best offers to make sure that you will get what you deserve from the comfort, privacy and fun during your trip.',
        img: 'https://justfields.com/storage/projects/7M5rV059/hotels.jpg',
    },
    {
        title: 'Car Rental',
        desc: 'Car rental service to provide you with comfort, privacy and save time during internal transfers throughout your stay.',
        img: 'https://justfields.com/storage/projects/7M5rV059/cars.jpg',
    },
    {
        title: 'Train Reservation',
        desc: 'Train Reservation service to provide you with comfort, privacy and save time during internal transfers throughout your stay.',
        img: 'https://justfields.com/storage/projects/7M5rV059/train.jpg',
    },
]);
</script>
  
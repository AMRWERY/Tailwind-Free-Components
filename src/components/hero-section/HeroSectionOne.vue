<template>
  <div class="relative py-24 overflow-hidden bg-gray-900 isolate sm:py-32">
    <img src="https://themehut.co/html/geair/assets/img/bg/destination_bg.jpg" class="absolute inset-0 object-cover object-right w-full h-full  -z-10 md:object-center" />
    <div class="hidden  sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="
            aspect-[1097/845]
            w-[68.5625rem]
            bg-gradient-to-tr
            from-[#ff4694]
            to-[#776fff]
            opacity-20
          " style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          " />
    </div>
    <div class="
          absolute
          -top-52
          left-1/2
          -z-10
          -translate-x-1/2
          transform-gpu
          blur-3xl
          sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu
        " aria-hidden="true">
      <div class="
            aspect-[1097/845]
            w-[68.5625rem]
            bg-gradient-to-tr
            from-[#ff4694]
            to-[#776fff]
            opacity-20
          " style="
            clip-path: polygon(
              74.1% 44.1%,
              100% 61.6%,
              97.5% 26.9%,
              85.5% 0.1%,
              80.7% 2%,
              72.5% 32.5%,
              60.2% 62.4%,
              52.4% 68.1%,
              47.5% 58.3%,
              45.2% 34.5%,
              27.5% 76.7%,
              0.1% 64.9%,
              17.9% 100%,
              27.6% 76.8%,
              76.1% 97.7%,
              74.1% 44.1%
            );
          " />
    </div>
    <div class="px-6 mx-auto max-w-7xl lg:px-8">
      <div class="max-w-2xl mx-auto lg:mx-0">
        <div class="inline-block p-2 py-1 bg-yellow-300 rounded-md">
          <p class="font-bold text-blue-600 text-md">Offer Deals</p>
        </div>
        <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Your Great Destination
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          Get rewarded for your travels – unlock instant savings of 10% or more
          with a free
          <span class="text-yellow-300">tripmainfo.com</span> account
        </p>
      </div>
      <div class="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
        <dl class="grid grid-cols-1 gap-8 mt-16  sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-300">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-white">
              {{ stat.value }}
            </dd>
          </div>
        </dl>
      </div>
      <p class="mt-6 text-lg leading-8 text-gray-300">
        Discover the latest offers & news and start planning
        <button class="p-2 py-1 text-blue-600 transition duration-300 ease-in-out delay-150 bg-yellow-300  rounded-2xl hover:-translate-y-1 hover:scale-110">
          Contact us
        </button>
      </p>
    </div>
  </div>
</template>

<script setup>
const stats = [
  { name: 'Happy Customers', value: '5830+' },
  { name: 'Client Satisfied', value: '100%' },
];
</script>
<template>
    <div>
        <div class="mx-auto my-12 max-w-8xl">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
                <router-link to="" v-for="(card, index) in positions" :key="card"
                    class="relative z-50 overflow-hidden bg-gray-100 rounded-lg cursor-pointer group transit">
                    <div class="relative w-full h-full">
                        <!-- The card image -->
                        <img src="https://justfields.com/storage/projects/7M5rV059/product-card-img.jpg"
                            alt="category image" class="object-cover w-full h-full" />
                        <!-- Overlay: covers whole card on hover with additional content -->
                        <div
                            class="absolute inset-0 z-0 transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50">
                            <!-- Overlay content container -->
                            <div class="absolute inset-0 flex items-center justify-center">
                                <!-- Wrap the text and underline in an inline-block container -->
                                <div class="inline-block">
                                    <p class="text-xl text-white font-[eb-garamond-italic] xs:text-5xl md:text-3xl">Save
                                        20%</p>
                                    <!-- Underline element: initial width 0, animates to full container width -->
                                    <span
                                        class="block h-0.5 bg-white w-0 group-hover:w-full transition-all duration-300">
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!-- Title: stays at its current (dynamic) position (higher z-index) -->

                        <div class="absolute z-10 p-2 text-xl font-bold text-red-500 transition-opacity font-[libre-baskerville-regular] xs:text-6xl md:text-4xl"
                            :class="getTitlePositionClass(index)">
                            {{ card.title }}
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const positions = ref([
    { title: 'product 1', class: 'top-4 start-4' },
    { title: 'product 2', class: 'top-4 end-4' },
    { title: 'product 3', class: 'bottom-4 start-4' },
    { title: 'product 4', class: 'bottom-4 end-4' },
    { title: 'product 5', class: 'start-4 top-4' },
])

const getTitlePositionClass = (index) => {
    return positions.value[index % positions.value.length].class;
};
</script>
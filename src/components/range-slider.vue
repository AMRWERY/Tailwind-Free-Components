<template>
    <div>
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h2 class="mb-4 text-2xl font-bold">Range Slider</h2>
            <div class="mb-4">
                <label for="price-range" class="block mb-2 font-bold text-gray-700">Price Range</label>
                <input type="range" id="price-range" class="w-full accent-indigo-600" min="0" max="1000"
                    v-model="priceValue" @input="updatePrice">
            </div>
            <div class="flex justify-between text-gray-500">
                <span id="minPrice">{{ formattedPrice }}</span>
                <span id="maxPrice">$1000</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const priceValue = ref(100);

const formattedPrice = computed(() => {
    return `$${priceValue.value}`;
});

const updatePrice = () => {
    // This function is not needed now since v-model and computed property handle updates
};
</script>
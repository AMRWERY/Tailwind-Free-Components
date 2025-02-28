<template>
    <div class="relative" ref="container">
        <!-- Input Field -->
        <input type="text" v-model="query" @input="handleInput" @keydown.down="highlightNext"
            @keydown.up="highlightPrev" @keydown.enter="selectHighlighted"
            class="px-4 py-2 border border-gray-300 rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search fruits..." aria-haspopup="listbox" :aria-expanded="isOpen">

        <!-- Suggestions List -->
        <ul v-if="isOpen && filteredSuggestions.length"
            class="absolute z-10 w-full mt-1 overflow-auto bg-white rounded-lg shadow-lg max-h-60" role="listbox">
            <li v-for="(suggestion, index) in filteredSuggestions" :key="suggestion" @click="selectItem(suggestion)"
                @mouseenter="highlightedIndex = index" @mouseleave="highlightedIndex = -1" :class="[
                    'px-4 py-2 cursor-pointer transition-colors',
                    highlightedIndex === index ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                ]" role="option" :aria-selected="highlightedIndex === index">
                {{ suggestion }}
            </li>
        </ul>

        <!-- No Results Message -->
        <div v-if="isOpen && !filteredSuggestions.length"
            class="absolute w-full px-4 py-2 mt-1 text-gray-500 bg-white rounded-lg shadow-lg">
            No results found
        </div>
    </div>
</template>

<script setup>
// import it in parent component

import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    suggestions: {
        type: Array,
        default: () => [
            "Apple",
            "Banana",
            "Cherry",
            "Date",
            "Elderberry",
            "Fig",
            "Grape",
            "Honeydew",
            "Kiwi",
            "Lemon",
            "Mango"
        ]
    }
})

const query = ref('')
const isOpen = ref(false)
const highlightedIndex = ref(-1)
const container = ref(null)

// Filtered suggestions
const filteredSuggestions = computed(() => {
    if (!query.value) return props.suggestions
    return props.suggestions.filter(item =>
        item.toLowerCase().includes(query.value.toLowerCase())
    )
})

// Handle input changes
const handleInput = () => {
    isOpen.value = true
    highlightedIndex.value = -1
}

// Select item
const selectItem = (item) => {
    query.value = item
    isOpen.value = false
}

// Keyboard navigation
const highlightNext = () => {
    highlightedIndex.value = Math.min(
        highlightedIndex.value + 1,
        filteredSuggestions.value.length - 1
    )
}

const highlightPrev = () => {
    highlightedIndex.value = Math.max(highlightedIndex.value - 1, -1)
}

const selectHighlighted = () => {
    if (highlightedIndex.value >= 0) {
        selectItem(filteredSuggestions.value[highlightedIndex.value])
    }
}

// Click outside handler
const clickOutsideHandler = (event) => {
    if (!container.value?.contains(event.target)) {
        isOpen.value = false
    }
}

// Add event listeners
onMounted(() => {
    document.addEventListener('click', clickOutsideHandler)
})

onUnmounted(() => {
    document.removeEventListener('click', clickOutsideHandler)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
<template>
    <div>
        <!-- Button to open the dialog -->
        <button @click="openDialog" class="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600">
            Open Dialog
        </button>

        <!-- Dialog Overlay and Container -->
        <transition name="fade">
            <div v-if="isDialogOpen" class="fixed z-50 bottom-4 right-4">
                <div class="p-6 bg-white rounded-lg shadow-lg">
                    <h3 class="mb-4 text-xl font-bold">Dialog Title</h3>
                    <p class="mb-4">This is a dialog positioned in the bottom right corner.</p>
                    <button @click="closeDialog"
                        class="px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600">
                        Close
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isDialogOpen = ref(false);

const openDialog = () => {
    isDialogOpen.value = true;
};

const closeDialog = () => {
    isDialogOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
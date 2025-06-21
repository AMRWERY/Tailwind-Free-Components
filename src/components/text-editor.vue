<template>
    <div>
        <div class="overflow-hidden border border-gray-300 rounded-lg">
            <!-- Toolbar -->
            <div class="flex flex-wrap gap-2 p-2 bg-gray-100 border-b">
                <button v-for="btn in buttons" :key="btn.command" :title="btn.label" type="button"
                    class="p-1 text-gray-700 hover:text-blue-600" @click="exec(btn.command, btn.value)">
                    <i :class="[btn.icon, 'w-5', 'h-5']"></i>
                </button>
            </div>

            <!-- Editor area -->
            <div ref="editor" class="min-h-[150px] p-3 outline-none prose prose-sm max-w-none" contenteditable
                @input="updateContent" v-html="content" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

// Local state for the content
const content = ref('')

const editor = ref(null)

const updateContent = () => {
    if (editor.value) {
        content.value = editor.value.innerHTML
    }
}

const exec = (command, value) => {
    document.execCommand(command, false, value ?? null)
    updateContent()
}

const buttons = [
    { command: 'bold', label: 'Bold', icon: 'fa-solid fa-bold' },
    { command: 'italic', label: 'Italic', icon: 'fa-solid fa-italic' },
    { command: 'underline', label: 'Underline', icon: 'fa-solid fa-underline' },
    { command: 'insertUnorderedList', label: 'Bullet List', icon: 'fa-solid fa-list-ul' },
    { command: 'insertOrderedList', label: 'Numbered List', icon: 'fa-solid fa-list-ol' },
    { command: 'removeFormat', label: 'Clear Formatting', icon: 'fa-solid fa-text-slash' }
]
</script>

<style scoped>
.prose:focus {
    outline: none;
}
</style>
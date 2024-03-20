<template>
    <button
        class="disabled:opacity-50 transition inline-flex items-center justify-center space-x-1.5 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:z-10 shrink-0 saturate-[110%] border-blue-700/75 focus:ring-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 px-3 py-1.5 text-sm font-medium rounded-md"
        disabled="">
        <div aria-label="Loading..." role="status">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"
                class="animate-spin w-6 h-6 stroke-white">
                <path
                    d="M12 3v3m6.366-.366-2.12 2.12M21 12h-3m.366 6.366-2.12-2.12M12 21v-3m-6.366.366 2.12-2.12M3 12h3m-.366-6.366 2.12 2.12">
                </path>
            </svg>
        </div>
        <span>Loading...</span>
    </button>
</template>

<script setup>

</script>
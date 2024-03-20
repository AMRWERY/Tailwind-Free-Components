<template>
    <div class="bg-yellow-100 w-full text-yellow-900 text-center p-2 md:p-4  rounded-lg relative font-bold tracking-wider">
        <span>This is a warning</span>
        <button class="absolute right-5" type="button">
            <span class="sr-only">close</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
</template>
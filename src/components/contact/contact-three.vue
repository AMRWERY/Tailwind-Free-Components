<template>
    <div
        class="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
        <div class="flex flex-col justify-between">
            <div class="space-y-2">
                <h2 class="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
                <div class="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
            </div>
            <img src="https://cdn.vuetifyjs.com/images/john.png" alt="" class="p-6 h-52 md:h-64">
        </div>
        <form novalidate class="space-y-6">
            <div>
                <label for="name" class="text-sm">Full name</label>
                <input id="name" type="text" placeholder="" class="w-full p-3 rounded dark:bg-gray-800">
            </div>
            <div>
                <label for="email" class="text-sm">Email</label>
                <input id="email" type="email" class="w-full p-3 rounded dark:bg-gray-800">
            </div>
            <div>
                <label for="message" class="text-sm">Message</label>
                <textarea id="message" rows="3" class="w-full p-3 rounded dark:bg-gray-800"></textarea>
            </div>
            <button type="submit"
                class="w-full p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send
                Message</button>
        </form>
    </div>
</template>
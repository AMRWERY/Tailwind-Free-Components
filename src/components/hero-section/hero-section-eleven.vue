<template>
    <div>
        <div class="">
            <header class="py-4 bg-gray-900 sm:py-6" x-data="{expanded: false}">
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between">
                        <div class="shrink-0">
                            <a href="#" title="" class="flex">
                                <img class="w-auto h-9"
                                    src="https://landingfoliocom.imgix.net/store/collection/dusk/images/logo.svg"
                                    alt="" />
                            </a>
                        </div>

                        <div class="flex md:hidden">
                            <button type="button" class="text-white" @click="expanded = !expanded"
                                :aria-expanded="expanded">
                                <span x-show="!expanded" aria-hidden="true">
                                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                            d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>

                                <span x-show="expanded" aria-hidden="true">
                                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>

                        <nav class="hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12">
                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Products </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Features </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Pricing </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Support </a>
                        </nav>

                        <div class="relative hidden md:justify-center md:items-center md:inline-flex group">
                            <div
                                class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                            </div>
                            <a href="#" title=""
                                class="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                role="button"> Start free trial </a>
                        </div>
                    </div>

                    <nav x-show="expanded" x-collapse>
                        <div class="flex flex-col pt-8 pb-4 space-y-6">
                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Products </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Features </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Pricing </a>

                            <a href="#" title=""
                                class="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
                                Support </a>

                            <div class="relative inline-flex items-center justify-center group">
                                <div
                                    class="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50">
                                </div>
                                <a href="#" title=""
                                    class="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                                    role="button"> Download Now </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <section class="py-12 bg-gray-900 sm:pb-16 lg:pb-20 xl:pb-24">
                <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div class="grid items-center max-w-5xl grid-cols-1 mx-auto gap-y-8 lg:grid-cols-5 gap-x-16">
                        <div class="max-w-md mx-auto text-center lg:max-w-none lg:col-span-3">
                            <h1 class="text-4xl font-normal text-white uppercase sm:text-5xl lg:text-6xl xl:text-8xl">
                                Get goods <span
                                    class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">delivered</span>
                            </h1>
                            <p class="mt-6 text-lg font-normal text-white sm:text-xl">Amet minim mollit non deserunt
                                ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                                mollit. Exercitation veniam.</p>
                            <div class="mt-8 sm:mt-10">
                                <a href="#" title=""
                                    class="inline-flex items-center justify-center px-8 py-4 text-base font-normal text-white transition-all duration-200 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:contrast-150"
                                    role="button"> Download Now </a>
                            </div>

                            <p class="max-w-xs mx-auto mt-4 text-base font-normal text-gray-400 sm:mt-8">
                                30 days free trial.<br />
                                then plans start at $9.99
                            </p>
                        </div>

                        <div class="lg:col-span-2 lg:order-first">
                            <img class="w-full max-w-sm mx-auto"
                                src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/3/iphone-mockup.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>

</script>
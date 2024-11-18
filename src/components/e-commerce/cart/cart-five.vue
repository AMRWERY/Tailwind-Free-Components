<template>
    <div class="py-6 bg-white sm:py-8 lg:py-12">
        <div class="max-w-screen-lg px-4 mx-auto md:px-8">
            <div class="mb-6 sm:mb-10 lg:mb-16">
                <h2 class="mb-4 text-2xl font-bold text-center text-gray-800  md:mb-6 lg:text-3xl">
                    Your Cart
                </h2>
            </div>

            <div class="flex flex-col gap-4 mb-6 sm:mb-8 md:gap-6">
                <!-- product - start -->
                <div class="flex flex-wrap overflow-hidden border rounded-lg  gap-x-4 sm:gap-y-4 lg:gap-6">
                    <a href="#" class="relative block w-32 h-48 overflow-hidden bg-gray-100  group sm:h-56 sm:w-40">
                        <img src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                            loading="lazy" alt="Photo by Thái An" class="object-cover object-center w-full h-full transition duration-200  group-hover:scale-110" />
                    </a>

                    <div class="flex flex-col justify-between flex-1 py-4">
                        <div>
                            <a href="#" class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100  hover:text-gray-500 lg:text-xl">Top</a>

                            <span class="block text-gray-500">Size: S</span>
                            <span class="block text-gray-500">Color: White</span>
                        </div>

                        <div>
                            <span class="block mb-1 font-bold text-gray-800 md:text-lg">$15.00</span>

                            <span class="flex items-center gap-1 text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>

                                In stock
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between w-full p-4 border-t  sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                        <div class="flex flex-col items-start gap-2">
                            <div class="flex w-20 h-12 overflow-hidden border rounded">
                                <input type="number" value="1" class="w-full px-4 py-2 transition duration-100 outline-none  ring-inset ring-indigo-300 focus:ring" />

                                <div class="flex flex-col border-l divide-y">
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        +
                                    </button>
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        -
                                    </button>
                                </div>
                            </div>

                            <button class="text-sm font-semibold text-indigo-500 transition duration-100 select-none  hover:text-indigo-600 active:text-indigo-700">
                                Delete
                            </button>
                        </div>

                        <div class="pt-3 ml-4 md:ml-8 md:pt-2 lg:ml-16">
                            <span class="block font-bold text-gray-800 md:text-lg">$15.00</span>
                        </div>
                    </div>
                </div>
                <!-- product - end -->

                <!-- product - start -->
                <div class="flex flex-wrap overflow-hidden border rounded-lg  gap-x-4 sm:gap-y-4 lg:gap-6">
                    <a href="#" class="relative block w-32 h-48 overflow-hidden bg-gray-100  group sm:h-56 sm:w-40">
                        <img src="https://images.unsplash.com/photo-1542327897-4141b355e20e?auto=format&q=75&fit=crop&w=200"
                            loading="lazy" alt="Photo by Jessica Radanavong" class="object-cover object-center w-full h-full transition duration-200  group-hover:scale-110" />
                    </a>

                    <div class="flex flex-col justify-between flex-1 py-4">
                        <div>
                            <a href="#" class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100  hover:text-gray-500 lg:text-xl">Jacket</a>

                            <span class="block text-gray-500">Size: M</span>
                            <span class="block text-gray-500">Color: Black</span>
                        </div>

                        <div>
                            <span class="block mb-1 font-bold text-gray-800 md:text-lg">$65.00</span>

                            <span class="flex items-center gap-1 text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>

                                In stock
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between w-full p-4 border-t  sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                        <div class="flex flex-col items-start gap-2">
                            <div class="flex w-20 h-12 overflow-hidden border rounded">
                                <input type="number" value="1" class="w-full px-4 py-2 transition duration-100 outline-none  ring-inset ring-indigo-300 focus:ring" />

                                <div class="flex flex-col border-l divide-y">
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        +
                                    </button>
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        -
                                    </button>
                                </div>
                            </div>

                            <button class="text-sm font-semibold text-indigo-500 transition duration-100 select-none  hover:text-indigo-600 active:text-indigo-700">
                                Delete
                            </button>
                        </div>

                        <div class="pt-3 ml-4 md:ml-8 md:pt-2 lg:ml-16">
                            <span class="block font-bold text-gray-800 md:text-lg">$65.00</span>
                        </div>
                    </div>
                </div>
                <!-- product - end -->

                <!-- product - start -->
                <div class="flex flex-wrap overflow-hidden border rounded-lg  gap-x-4 sm:gap-y-4 lg:gap-6">
                    <a href="#" class="relative block w-32 h-48 overflow-hidden bg-gray-100  group sm:h-56 sm:w-40">
                        <img src="https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?auto=format&q=75&fit=crop&w=200"
                            loading="lazy" alt="Photo by vahid kanani" class="object-cover object-center w-full h-full transition duration-200  group-hover:scale-110" />
                    </a>

                    <div class="flex flex-col justify-between flex-1 py-4">
                        <div>
                            <a href="#" class="inline-block mb-1 text-lg font-bold text-gray-800 transition duration-100  hover:text-gray-500 lg:text-xl">Business suit</a>

                            <span class="block text-gray-500">Size: S</span>
                            <span class="block text-gray-500">Color: Black</span>
                        </div>

                        <div>
                            <span class="block mb-1 font-bold text-gray-800 md:text-lg">$49.99</span>

                            <span class="flex items-center gap-1 text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-green-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M5 13l4 4L19 7" />
                                </svg>

                                In stock
                            </span>
                        </div>
                    </div>

                    <div class="flex justify-between w-full p-4 border-t  sm:w-auto sm:border-none sm:pl-0 lg:p-6 lg:pl-0">
                        <div class="flex flex-col items-start gap-2">
                            <div class="flex w-20 h-12 overflow-hidden border rounded">
                                <input type="number" value="1" class="w-full px-4 py-2 transition duration-100 outline-none  ring-inset ring-indigo-300 focus:ring" />

                                <div class="flex flex-col border-l divide-y">
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        +
                                    </button>
                                    <button class="flex items-center justify-center flex-1 w-6 leading-none transition duration-100 bg-white select-none  hover:bg-gray-100 active:bg-gray-200">
                                        -
                                    </button>
                                </div>
                            </div>

                            <button class="text-sm font-semibold text-indigo-500 transition duration-100 select-none  hover:text-indigo-600 active:text-indigo-700">
                                Delete
                            </button>
                        </div>

                        <div class="pt-3 ml-4 md:ml-8 md:pt-2 lg:ml-16">
                            <span class="block font-bold text-gray-800 md:text-lg">$49.99</span>
                        </div>
                    </div>
                </div>
                <!-- product - end -->
            </div>

            <!-- totals - start -->
            <div class="flex flex-col items-end gap-4">
                <div class="w-full p-4 bg-gray-100 rounded-lg sm:max-w-xs">
                    <div class="space-y-1">
                        <div class="flex justify-between gap-4 text-gray-500">
                            <span>Subtotal</span>
                            <span>$129.99</span>
                        </div>

                        <div class="flex justify-between gap-4 text-gray-500">
                            <span>Shipping</span>
                            <span>$4.99</span>
                        </div>
                    </div>

                    <div class="pt-4 mt-4 border-t">
                        <div class="flex items-start justify-between gap-4 text-gray-800">
                            <span class="text-lg font-bold">Total</span>

                            <span class="flex flex-col items-end">
                                <span class="text-lg font-bold">$134.98 USD</span>
                                <span class="text-sm text-gray-500">including VAT</span>
                            </span>
                        </div>
                    </div>
                </div>

                <button class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none  ring-indigo-300 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                    Check out
                </button>
            </div>
            <!-- totals - end -->
        </div>
    </div>
</template>
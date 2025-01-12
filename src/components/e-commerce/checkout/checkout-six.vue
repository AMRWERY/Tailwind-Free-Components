<template>
    <div>
        <div class="p-4 font-sans bg-white">
            <div class="max-w-4xl mx-auto">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
                        Checkout</h2>
                </div>

                <div class="mt-12">
                    <div class="grid gap-4 md:grid-cols-3">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-300">01</h3>
                            <h3 class="mt-1 text-xl font-semibold text-gray-800">Personal Details</h3>
                        </div>

                        <div class="md:col-span-2">
                            <form>
                                <div class="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <input type="text" placeholder="First name"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last name"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email address"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Phone number"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="grid gap-4 mt-12 md:grid-cols-3">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-300">02</h3>
                            <h3 class="mt-1 text-xl font-semibold text-gray-800">Shopping Address</h3>
                        </div>

                        <div class="md:col-span-2">
                            <form>
                                <div class="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <input type="text" placeholder="Street address"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="City"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="State"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Zip Code"
                                            class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="grid gap-4 mt-12 md:grid-cols-3">
                        <div>
                            <h3 class="text-3xl font-bold text-gray-300">03</h3>
                            <h3 class="mt-1 text-xl font-semibold text-gray-800">Payment method</h3>
                        </div>

                        <div class="md:col-span-2">
                            <div class="grid gap-4 sm:grid-cols-2">
                                <div class="flex items-center">
                                    <input type="radio" class="w-5 h-5 cursor-pointer" id="card" checked />
                                    <label for="card" class="flex gap-2 ml-4 cursor-pointer">
                                        <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                                        <img src="https://readymadeui.com/images/american-express.webp" class="w-12"
                                            alt="card2" />
                                        <img src="https://readymadeui.com/images/master.webp" class="w-12"
                                            alt="card3" />
                                    </label>
                                </div>

                                <div class="flex items-center">
                                    <input type="radio" class="w-5 h-5 cursor-pointer" id="paypal" />
                                    <label for="paypal" class="flex gap-2 ml-4 cursor-pointer">
                                        <img src="https://readymadeui.com/images/paypal.webp" class="w-20"
                                            alt="paypalCard" />
                                    </label>
                                </div>
                            </div>

                            <div class="grid gap-4 mt-4 sm:grid-cols-4">
                                <div class="col-span-2">
                                    <input type="number" placeholder="Card number"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <input type="number" placeholder="EXP."
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                </div>
                                <div>
                                    <input type="number" placeholder="CVV"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-white border-2 rounded-md outline-none focus:border-blue-500" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-end gap-4 mt-12">
                        <button type="button"
                            class="px-6 py-3 text-sm font-semibold tracking-wide text-gray-800 bg-transparent border-2 rounded-md hover:bg-gray-100">Pay
                            later</button>
                        <button type="button"
                            class="px-6 py-3 text-sm font-semibold tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-700">Pay
                            now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
<template>
    <div>
        <div class="font-[sans-serif] bg-white p-4">
            <div class="w-full max-w-4xl mx-auto">
                <div>
                    <h2 class="inline-block text-3xl font-extrabold text-gray-800">Checkout</h2>
                </div>

                <div class="flex items-start mt-12">
                    <div class="w-full">
                        <div class="flex items-center w-full">
                            <div
                                class="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                                <span class="text-base font-bold text-white">1</span>
                            </div>
                            <div class="w-full h-[3px] mx-4 rounded-lg bg-blue-600"></div>
                        </div>
                        <div class="mt-2 mr-4 max-sm:hidden">
                            <h6 class="text-base font-bold text-blue-700">Shipping</h6>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="flex items-center w-full">
                            <div
                                class="w-8 h-8 shrink-0 mx-[-1px] bg-blue-600 p-1.5 flex items-center justify-center rounded-full">
                                <span class="text-base font-bold text-white">2</span>
                            </div>
                            <div class="w-full h-[3px] mx-4 rounded-lg bg-gray-300"></div>
                        </div>
                        <div class="mt-2 mr-4 max-sm:hidden">
                            <h6 class="text-base font-bold text-blue-700">Billing</h6>
                        </div>
                    </div>

                    <div class="w-full">
                        <div class="flex items-center w-full">
                            <div
                                class="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                                <span class="text-base font-bold text-white">3</span>
                            </div>
                            <div class="w-full h-[3px] mx-4 rounded-lg bg-gray-300"></div>
                        </div>
                        <div class="mt-2 mr-4 max-sm:hidden">
                            <h6 class="text-base font-bold text-gray-400">Confirm</h6>
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center">
                            <div
                                class="w-8 h-8 shrink-0 mx-[-1px] bg-gray-300 p-1.5 flex items-center justify-center rounded-full">
                                <span class="text-base font-bold text-white">4</span>
                            </div>
                        </div>
                        <div class="mt-2 max-sm:hidden">
                            <h6 class="text-base font-bold text-gray-400">Finish</h6>
                        </div>
                    </div>
                </div>

                <div class="grid gap-4 mt-8 sm:grid-cols-2">
                    <div class="flex items-center justify-center px-4 py-8 bg-gray-100 rounded-lg">
                        <input type="radio" class="w-6 h-6 cursor-pointer" id="card" checked />
                        <label for="card" class="flex gap-2 ml-4 cursor-pointer">
                            <img src="https://readymadeui.com/images/visa.webp" class="w-12" alt="card1" />
                            <img src="https://readymadeui.com/images/american-express.webp" class="w-12" alt="card2" />
                            <img src="https://readymadeui.com/images/master.webp" class="w-12" alt="card3" />
                        </label>
                    </div>

                    <div class="flex items-center justify-center px-4 py-8 bg-gray-100 rounded-lg">
                        <input type="radio" class="w-6 h-6 cursor-pointer" id="paypal" />
                        <label for="paypal" class="flex gap-2 ml-4 cursor-pointer">
                            <img src="https://readymadeui.com/images/paypal.webp" class="w-24" alt="paypalCard" />
                        </label>
                    </div>
                </div>

                <form class="mt-8">
                    <div class="grid gap-6">
                        <div
                            class="flex overflow-hidden bg-white border-b border-gray-300 focus-within:border-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2 fill-gray-300" viewBox="0 0 24 24">
                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                <path
                                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                    data-original="#000000"></path>
                            </svg>
                            <input type="text" placeholder="Cardholder's Name"
                                class="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none" />
                        </div>

                        <div
                            class="flex overflow-hidden bg-white border-b border-gray-300 focus-within:border-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 ml-2" viewBox="0 0 291.764 291.764">
                                <path fill="#2394bc"
                                    d="m119.259 100.23-14.643 91.122h23.405l14.634-91.122h-23.396zm70.598 37.118c-8.179-4.039-13.193-6.765-13.193-10.896.1-3.756 4.24-7.604 13.485-7.604 7.604-.191 13.193 1.596 17.433 3.374l2.124.948 3.182-19.065c-4.623-1.787-11.953-3.756-21.007-3.756-23.113 0-39.388 12.017-39.489 29.204-.191 12.683 11.652 19.721 20.515 23.943 9.054 4.331 12.136 7.139 12.136 10.987-.1 5.908-7.321 8.634-14.059 8.634-9.336 0-14.351-1.404-21.964-4.696l-3.082-1.404-3.273 19.813c5.498 2.444 15.609 4.595 26.104 4.705 24.563 0 40.546-11.835 40.747-30.152.08-10.048-6.165-17.744-19.659-24.035zm83.034-36.836h-18.108c-5.58 0-9.82 1.605-12.236 7.331l-34.766 83.509h24.563l6.765-18.08h27.481l3.51 18.153h21.664l-18.873-90.913zm-26.97 54.514c.474.046 9.428-29.514 9.428-29.514l7.13 29.514h-16.558zM85.059 100.23l-22.931 61.909-2.498-12.209c-4.24-14.087-17.533-29.395-32.368-36.999l20.998 78.33h24.764l36.799-91.021H85.059v-.01z"
                                    data-original="#2394bc" />
                                <path fill="#efc75e"
                                    d="M51.916 111.982c-1.787-6.948-7.486-11.634-15.226-11.734H.374L0 101.934c28.329 6.984 52.107 28.474 59.821 48.688l-7.905-38.64z"
                                    data-original="#efc75e" />
                            </svg>
                            <input type="number" placeholder="Card Number"
                                class="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none" />
                        </div>

                        <div class="grid grid-cols-2 gap-6">
                            <div
                                class="flex overflow-hidden bg-white border-b border-gray-300 focus-within:border-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2 fill-gray-300"
                                    viewBox="0 0 512 512">
                                    <circle cx="386" cy="210" r="20" data-original="#000000" />
                                    <path
                                        d="M432 40h-26V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-91V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20h-90V20c0-11.046-8.954-20-20-20s-20 8.954-20 20v20H80C35.888 40 0 75.888 0 120v312c0 44.112 35.888 80 80 80h153c11.046 0 20-8.954 20-20s-8.954-20-20-20H80c-22.056 0-40-17.944-40-40V120c0-22.056 17.944-40 40-40h25v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h90v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h91v20c0 11.046 8.954 20 20 20s20-8.954 20-20V80h26c22.056 0 40 17.944 40 40v114c0 11.046 8.954 20 20 20s20-8.954 20-20V120c0-44.112-35.888-80-80-80z"
                                        data-original="#000000" />
                                    <path
                                        d="M391 270c-66.72 0-121 54.28-121 121s54.28 121 121 121 121-54.28 121-121-54.28-121-121-121zm0 202c-44.663 0-81-36.336-81-81s36.337-81 81-81 81 36.336 81 81-36.337 81-81 81z"
                                        data-original="#000000" />
                                    <path
                                        d="M420 371h-9v-21c0-11.046-8.954-20-20-20s-20 8.954-20 20v41c0 11.046 8.954 20 20 20h29c11.046 0 20-8.954 20-20s-8.954-20-20-20z"
                                        data-original="#000000" />
                                    <circle cx="299" cy="210" r="20" data-original="#000000" />
                                    <circle cx="212" cy="297" r="20" data-original="#000000" />
                                    <circle cx="125" cy="210" r="20" data-original="#000000" />
                                    <circle cx="125" cy="297" r="20" data-original="#000000" />
                                    <circle cx="125" cy="384" r="20" data-original="#000000" />
                                    <circle cx="212" cy="384" r="20" data-original="#000000" />
                                    <circle cx="212" cy="210" r="20" data-original="#000000" />
                                </svg>
                                <input type="number" placeholder="EXP."
                                    class="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none" />
                            </div>

                            <div
                                class="flex overflow-hidden bg-white border-b border-gray-300 focus-within:border-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 ml-2 fill-gray-300"
                                    viewBox="0 0 34 34">
                                    <path
                                        d="M17 1c-5 0-9 4-9 9v4c-1.7 0-3 1.3-3 3v13c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V17c0-1.7-1.3-3-3-3v-4c0-5-4-9-9-9zm10 16v13c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h18c.6 0 1 .4 1 1zm-17-3v-4c0-3.9 3.1-7 7-7s7 3.1 7 7v4z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M17 19c-1.7 0-3 1.3-3 3 0 1.3.8 2.4 2 2.8V27c0 .6.4 1 1 1s1-.4 1-1v-2.2c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3zm0 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"
                                        data-original="#000000"></path>
                                </svg>
                                <input type="number" placeholder="CVV"
                                    class="px-3 py-3.5 bg-white text-gray-800 w-full text-sm outline-none" />
                            </div>
                        </div>

                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                class="w-4 h-4 text-blue-600 border-gray-300 rounded shrink-0 focus:ring-blue-500" />
                            <label for="remember-me" class="block ml-3 text-sm">
                                I accept the <a href="javascript:void(0);"
                                    class="ml-1 font-semibold text-blue-600 hover:underline">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div class="flex flex-wrap justify-between gap-4 p-4 mt-8 bg-gray-100 rounded-lg">
                        <button type="button"
                            class="min-w-[150px] px-6 py-3.5 text-sm bg-white text-gray-800 rounded-lg max-sm:order-1">Back</button>
                        <button type="button"
                            class="min-w-[150px] px-6 py-3.5 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Confirm
                            payment $240</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
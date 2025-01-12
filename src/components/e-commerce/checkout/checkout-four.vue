<template>
    <div>
        <div class="font-[sans-serif] bg-white">
            <div class="flex h-full gap-12 max-sm:flex-col max-lg:gap-4">
                <div class="bg-gray-100 sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                    <div class="relative h-full">
                        <div class="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                            <div class="space-y-4">

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex w-32 p-3 bg-gray-200 rounded-md h-28 max-lg:w-24 max-lg:h-24 shrink-0">
                                        <img src='https://readymadeui.com/images/product10.webp'
                                            class="object-contain w-full" />
                                    </div>
                                    <div class="w-full">
                                        <h3 class="text-sm text-gray-800 lg:text-base">Split Sneakers</h3>
                                        <ul class="mt-3 space-y-1 text-xs text-gray-800">
                                            <li class="flex flex-wrap gap-4">Size <span class="ml-auto">37</span></li>
                                            <li class="flex flex-wrap gap-4">Quantity <span class="ml-auto">2</span>
                                            </li>
                                            <li class="flex flex-wrap gap-4">Total Price <span
                                                    class="ml-auto">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex w-32 p-3 bg-gray-200 rounded-md h-28 max-lg:w-24 max-lg:h-24 shrink-0">
                                        <img src='https://readymadeui.com/images/product11.webp'
                                            class="object-contain w-full" />
                                    </div>
                                    <div class="w-full">
                                        <h3 class="text-sm text-gray-800 lg:text-base">Velvet Boots</h3>
                                        <ul class="mt-3 space-y-1 text-xs text-gray-800">
                                            <li>Size <span class="float-right">37</span></li>
                                            <li>Quantity <span class="float-right">2</span></li>
                                            <li>Total Price <span class="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex w-32 p-3 bg-gray-200 rounded-md h-28 max-lg:w-24 max-lg:h-24 shrink-0">
                                        <img src='https://readymadeui.com/images/product14.webp'
                                            class="object-contain w-full" />
                                    </div>
                                    <div class="w-full">
                                        <h3 class="text-sm text-gray-800 lg:text-base">Echo Elegance</h3>
                                        <ul class="mt-3 space-y-1 text-xs text-gray-800">
                                            <li>Size <span class="float-right">37</span></li>
                                            <li>Quantity <span class="float-right">2</span></li>
                                            <li>Total Price <span class="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="flex items-start gap-4">
                                    <div
                                        class="flex w-32 p-3 bg-gray-200 rounded-md h-28 max-lg:w-24 max-lg:h-24 shrink-0">
                                        <img src='https://readymadeui.com/images/product13.webp'
                                            class="object-contain w-full" />
                                    </div>
                                    <div class="w-full">
                                        <h3 class="text-sm text-gray-800 lg:text-base">Pumps</h3>
                                        <ul class="mt-3 space-y-1 text-xs text-gray-800">
                                            <li>Size <span class="float-right">37</span></li>
                                            <li>Quantity <span class="float-right">2</span></li>
                                            <li>Total Price <span class="float-right">$40</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full p-4 bg-gray-200 md:absolute md:left-0 md:bottom-0">
                            <h4 class="flex flex-wrap gap-4 text-sm text-gray-800 lg:text-base">Total <span
                                    class="ml-auto">$84.00</span></h4>
                        </div>
                    </div>
                </div>

                <div class="sticky top-0 w-full max-w-4xl px-4 py-8 rounded-md h-max">
                    <h2 class="text-2xl font-bold text-gray-800">Complete your order</h2>
                    <form class="mt-8">
                        <div>
                            <h3 class="mb-4 text-sm text-gray-800 lg:text-base">Personal Details</h3>
                            <div class="grid gap-4 md:grid-cols-2">
                                <div>
                                    <input type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="email" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>

                                <div>
                                    <input type="number" placeholder="Phone No."
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h3 class="mb-4 text-sm text-gray-800 lg:text-base">Shipping Address</h3>
                            <div class="grid gap-4 md:grid-cols-2">
                                <div>
                                    <input type="text" placeholder="Address Line"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="City"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="State"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Zip Code"
                                        class="w-full px-4 py-3 text-sm text-gray-800 bg-gray-100 rounded-md focus:bg-transparent focus:outline-blue-600" />
                                </div>
                            </div>

                            <div class="flex gap-4 mt-8 max-md:flex-col">
                                <button type="button"
                                    class="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1">Cancel</button>
                                <button type="button"
                                    class="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Complete
                                    Purchase</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
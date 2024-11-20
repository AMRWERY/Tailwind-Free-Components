<template>
    <div>
        <div class="w-full max-w-lg p-8 mx-auto">
            <div class="p-6 bg-white rounded-lg shadow-lg">
                <h2 class="mb-6 text-lg font-medium">Payment Information</h2>
                <form>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-number" class="block mb-2 text-sm font-medium text-gray-700">Card
                                Number</label>
                            <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000"
                                class="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="expiration-date" class="block mb-2 text-sm font-medium text-gray-700">Expiration
                                Date</label>
                            <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY"
                                class="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="cvv" class="block mb-2 text-sm font-medium text-gray-700">CVV</label>
                            <input type="text" name="cvv" id="cvv" placeholder="000"
                                class="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                        <div class="col-span-2 sm:col-span-1">
                            <label for="card-holder" class="block mb-2 text-sm font-medium text-gray-700">Card
                                Holder</label>
                            <input type="text" name="card-holder" id="card-holder" placeholder="Full Name"
                                class="w-full px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500">
                        </div>
                    </div>
                    <div class="mt-8">
                        <button type="submit"
                            class="w-full py-3 font-medium text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
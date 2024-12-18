<template>
    <div>
        <div class="max-w-4xl mx-auto mt-10">
            <div class="p-6 bg-white rounded-lg shadow-lg">
                <!-- Stepper Header -->
                <div class="flex items-center justify-between mb-6">
                    <div :class="step === 1 ? 'text-blue-600' : 'text-gray-400'">
                        <span class="text-lg font-semibold">Checkout Form</span>
                    </div>
                    <div :class="step === 2 ? 'text-blue-600' : 'text-gray-400'">
                        <span class="text-lg font-semibold">Payment Form</span>
                    </div>
                </div>

                <!-- Stepper Content -->
                <div v-if="step === 1">
                    <!-- Checkout Form -->
                    <form @submit.prevent="goToPaymentForm">
                        <div class="mb-4">
                            <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                            <input type="text" id="name" v-model="checkoutData.name"
                                class="w-full p-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div class="mb-4">
                            <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                            <input type="text" id="address" v-model="checkoutData.address"
                                class="w-full p-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div class="flex justify-between">
                            <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md">Next</button>
                        </div>
                    </form>
                </div>

                <div v-if="step === 2">
                    <!-- Payment Form -->
                    <form @submit.prevent="submitPayment">
                        <div class="mb-4">
                            <label for="cardNumber" class="block text-sm font-medium text-gray-700">Card Number</label>
                            <input type="text" id="cardNumber" v-model="paymentData.cardNumber"
                                class="w-full p-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div class="mb-4">
                            <label for="expiryDate" class="block text-sm font-medium text-gray-700">Expiry Date</label>
                            <input type="text" id="expiryDate" v-model="paymentData.expiryDate"
                                class="w-full p-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div class="mb-4">
                            <label for="cvv" class="block text-sm font-medium text-gray-700">CVV</label>
                            <input type="text" id="cvv" v-model="paymentData.cvv"
                                class="w-full p-2 mt-1 border border-gray-300 rounded-md" required />
                        </div>
                        <div class="flex justify-between">
                            <button @click="goBackToCheckout" type="button"
                                class="px-4 py-2 text-white bg-gray-500 rounded-md">Back</button>
                            <button type="submit" class="px-4 py-2 text-white bg-green-500 rounded-md">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const step = ref(1); // Track the current step (1 = Checkout, 2 = Payment)
const checkoutData = ref({
    name: '',
    address: '',
});

const paymentData = ref({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
});

// Method to go to Payment Form
const goToPaymentForm = () => {
    step.value = 2;
};

// Method to go back to Checkout Form
const goBackToCheckout = () => {
    step.value = 1;
};

// Method to handle form submission
const submitPayment = () => {
    alert('Payment Submitted');
    // You can add additional logic to handle the payment here
};
</script>
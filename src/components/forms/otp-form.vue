<template>
    <div class="relative flex flex-col justify-center min-h-screen py-12 overflow-hidden bg-gray-50">
        <div class="relative w-full max-w-lg px-6 pt-10 mx-auto bg-white shadow-xl pb-9 rounded-2xl">
            <div class="flex flex-col w-full max-w-md mx-auto space-y-16">
                <div class="flex flex-col items-center justify-center space-y-2 text-center">
                    <div class="text-3xl font-semibold">
                        <p>Email Verification</p>
                    </div>
                    <div class="flex flex-row text-sm font-medium text-gray-400">
                        <p>We have sent a code to your email ba**@dipainhouse.com</p>
                    </div>
                </div>

                <div>
                    <form action="" method="post">
                        <div class="flex flex-col space-y-16">
                            <div class="flex flex-row items-center justify-between w-full max-w-xs mx-auto">
                                <div class="w-16 h-16 ">
                                    <input
                                        class="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                        type="text" name="" id="">
                                </div>
                                <div class="w-16 h-16 ">
                                    <input
                                        class="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                        type="text" name="" id="">
                                </div>
                                <div class="w-16 h-16 ">
                                    <input
                                        class="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                        type="text" name="" id="">
                                </div>
                                <div class="w-16 h-16 ">
                                    <input
                                        class="flex flex-col items-center justify-center w-full h-full px-5 text-lg text-center bg-white border border-gray-200 outline-none rounded-xl focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                        type="text" name="" id="">
                                </div>
                            </div>

                            <div class="flex flex-col space-y-5">
                                <div>
                                    <button
                                        class="flex flex-row items-center justify-center w-full py-5 text-sm text-center text-white bg-blue-700 border border-none shadow-sm outline-none rounded-xl">
                                        Verify Account
                                    </button>
                                </div>

                                <div
                                    class="flex flex-row items-center justify-center space-x-1 text-sm font-medium text-center text-gray-500">
                                    <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-600"
                                        href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                </div>
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
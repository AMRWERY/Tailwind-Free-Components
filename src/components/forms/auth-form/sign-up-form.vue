<template>
    <div>
        <div class="flex items-center justify-center h-screen px-4 bg-gray-100 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8">
                <div class="p-6 bg-white rounded-md shadow-md">
                    <img class="w-auto h-12 mx-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />
                    <h2 class="my-3 text-3xl font-bold tracking-tight text-center text-gray-900">
                        Sign up for an account
                    </h2>

                    <form class="space-y-6" method="POST">
                        <div>
                            <label for="new-password" class="block text-sm font-medium text-gray-700">Username</label>
                            <div class="mt-1">
                                <input name="username" type="username" required
                                    class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Email</label>
                            <div class="mt-1">
                                <input name="email" type="email-address" autocomplete="email-address" required
                                    class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                            <div class="mt-1">
                                <input name="password" type="password" autocomplete="password" required
                                    class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">Confirm
                                Password</label>
                            <div class="mt-1">
                                <input name="confirm_password" type="password" autocomplete="confirm-password" required
                                    class="block w-full px-2 py-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                class="flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-400 hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                                Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>
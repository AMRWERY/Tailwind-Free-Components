<template>
    <div class="flex flex-col items-center w-full min-h-screen pt-6  bg-gray-50 sm:justify-center sm:pt-0">
        <div class="w-full p-5 mx-auto sm:max-w-md">
            <h2 class="mb-12 text-5xl font-extrabold text-center">Welcome.</h2>
            <form>
                <div class="mb-4">
                    <label class="block mb-1" for="email">Email-Address</label>
                    <input id="email" type="text" name="email" class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm  focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100" />
                </div>
                <div class="mb-4">
                    <label class="block mb-1" for="password">Password</label>
                    <input id="password" type="password" name="password" class="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm  focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 disabled:bg-gray-100" />
                </div>
                <div class="flex items-center justify-between mt-6">
                    <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="text-red-600 border border-gray-300 shadow-sm  focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50" />
                        <label for="remember_me" class="block ml-2 text-sm leading-5 text-gray-900">
                            Remember me
                        </label>
                    </div>
                    <a href="#" class="text-sm"> Forgot your password? </a>
                </div>
                <div class="mt-6">
                    <button class="inline-flex items-center justify-center w-full px-4 py-2 font-semibold text-white capitalize transition bg-red-600 border border-transparent rounded-md  hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25">
                        Sign In
                    </button>
                </div>
                <div class="mt-6 text-center">
                    <a href="#" class="underline">Sign up for an account</a>
                </div>
            </form>
        </div>
    </div>
</template>
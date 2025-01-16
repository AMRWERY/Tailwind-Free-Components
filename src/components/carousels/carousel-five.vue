<template>
    <div>
        <div class="text-gray-800 bg-gray-100 dark:bg-gray-900 dark:text-white">
            <div class="p-6 mx-auto max-w-7xl">
                <!-- Title -->
                <div class="mb-6 text-center">
                    <h1 class="text-3xl font-bold">Auto-Sliding Carousel</h1>
                    <p class="text-gray-600 dark:text-gray-400">Auto-slide through your content seamlessly.</p>
                </div>

                <!-- Carousel Wrapper -->
                <div class="overflow-hidden rounded-lg shadow-lg">
                    <!-- Carousel -->
                    <div class="carousel">
                        <!-- Slide 1 -->
                        <div class="p-6 bg-white carousel-item dark:bg-gray-800">
                            <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk2.webp"
                                alt="Slide 1" class="object-cover w-full h-64 rounded-md">
                            <h2 class="mt-4 text-xl font-semibold">Slide 1</h2>
                            <p class="text-gray-600 dark:text-gray-400">This is the first slide of the carousel.</p>
                        </div>

                        <!-- Slide 2 -->
                        <div class="p-6 bg-white carousel-item dark:bg-gray-800">
                            <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722161/AbhirajK/Abhirajk3.webp"
                                alt="Slide 2" class="object-cover w-full h-64 rounded-md">
                            <h2 class="mt-4 text-xl font-semibold">Slide 2</h2>
                            <p class="text-gray-600 dark:text-gray-400">This is the second slide of the carousel.</p>
                        </div>

                        <!-- Slide 3 -->
                        <div class="p-6 bg-white carousel-item dark:bg-gray-800">
                            <img src="https://res.cloudinary.com/djv4xa6wu/image/upload/v1735722163/AbhirajK/Abhirajk%20mykare.webp"
                                alt="Slide 3" class="object-cover w-full h-64 rounded-md">
                            <h2 class="mt-4 text-xl font-semibold">Slide 3</h2>
                            <p class="text-gray-600 dark:text-gray-400">This is the third slide of the carousel.</p>
                        </div>
                    </div>
                </div>

                <!-- Instructions -->
                <div class="mt-6 text-center">
                    <p class="text-gray-500 dark:text-gray-400">
                        This carousel automatically slides through the content using CSS animations.
                    </p>
                </div>

                <!-- Backlink -->
                <footer class="mt-8 text-center">
                    <p class="text-gray-600 dark:text-gray-400">
                        Designed by <a href="https://abhirajk.vercel.app/" class="text-blue-500 hover:underline"
                            target="_blank">Abhiraj K</a>
                    </p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@keyframes slide {
    0% {
        transform: translateX(0%);
    }

    20% {
        transform: translateX(0%);
    }

    25% {
        transform: translateX(-100%);
    }

    45% {
        transform: translateX(-100%);
    }

    50% {
        transform: translateX(-200%);
    }

    70% {
        transform: translateX(-200%);
    }

    75% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(0%);
    }
}

.carousel {
    display: flex;
    animation: slide 12s infinite;
}

.carousel-item {
    flex: 0 0 100%;
}
</style>
<template>
    <div>
        <section class="relative flex flex-col items-center justify-center h-screen text-center text-white ">
            <div class="absolute top-0 left-0 w-full h-full overflow-hidden video-docker">
                <video class="absolute object-cover min-w-full min-h-full"
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                    type="video/mp4" autoplay muted loop></video>
            </div>
            <div class="z-10 space-y-2 video-content">
                <h1 class="text-6xl font-light">full Hero Video</h1>
                <h3 class="text-3xl font-light">with TailwindCSS</h3>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style scoped>
.video-docker video {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.video-docker::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
}
</style>
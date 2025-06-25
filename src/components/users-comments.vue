<template>
    <div>
        <div class="space-y-4">
            <div v-for="comment in comments" :key="comment.id">
                <!-- Main comment -->
                <div class="flex items-start space-s-3">
                    <img :src="comment.avatar" class="w-8 h-8 border border-gray-400 rounded-full" />
                    <div>
                        <div class="max-w-3xl px-4 py-2 border border-gray-300 rounded-lg">
                            <p class="text-sm font-bold">{{ comment.author }}</p>
                            <p class="text-sm">{{ comment.text }}</p>
                        </div>
                        <div class="text-xs text-gray-400 flex items-center gap-4 mt-1.5 ms-2">
                            <span>{{ comment.time }}</span>
                            <span class="cursor-pointer hover:underline">Like</span>
                        </div>
                    </div>
                </div>

                <!-- Replies -->
                <div v-if="comment.replies" class="mt-2 space-y-3 ms-12">
                    <div v-for="reply in comment.replies" :key="reply.id" class="flex items-start space-s-3">
                        <img :src="comment.avatar" class="w-8 h-8 border border-gray-400 rounded-full" />
                        <div>
                            <div class="max-w-3xl px-4 py-2 border border-gray-300 rounded-lg">
                                <p class="text-sm font-bold">{{ reply.author }}</p>
                                <p class="text-sm">{{ reply.text }}</p>
                            </div>
                            <div class="text-xs text-gray-400 flex items-center gap-4 mt-1.5 ms-2">
                                <span>{{ reply.time }}</span>
                                <span class="cursor-pointer hover:underline">Like</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const comments = [
    {
        id: 1,
        author: "user 1",
        text: "Aspernatur beatae cu.",
        time: "1d",
        avatar: "https://justfields.com/storage/projects/7M5rV059/images.jpg",
        replies: [
            {
                id: 11,
                author: "user 2",
                text: "Et dolore exercitati.",
                time: "1d",
                avatar: "https://justfields.com/storage/projects/7M5rV059/images.jpg",
            },
        ],
    },
];
</script>
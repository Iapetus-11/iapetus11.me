<script setup lang="ts">
    import type { ProjectDefinition } from '~/data/projects';

    defineProps<ProjectDefinition>();
</script>

<template>
    <NuxtLink
        :href="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="group bg-aqua-800 hover:bg-aqua-700 relative flex h-40 items-center space-x-3 overflow-hidden rounded-xl transition-colors"
    >
        <div class="w-2/3 p-3 md:p-6">
            <h3 class="mb-2 text-2xl font-semibold text-purple-200 sm:text-3xl">
                {{ name }}
            </h3>
            <p class="text-white">{{ description }}</p>
        </div>

        <div
            class="bg-aqua-900 group-hover:bg-aqua-800 ml-auto flex h-full w-[160px] max-w-48 rounded-l-4xl px-3 py-3 transition-colors"
            style="box-shadow: -6px 1px 5px -6px rgba(0, 0, 0, 0.25)"
        >
            <img
                :src="image"
                :alt="name"
                class="h-fit w-full self-center rounded-l-3xl rounded-r-xl"
            />
        </div>
    </NuxtLink>
</template>

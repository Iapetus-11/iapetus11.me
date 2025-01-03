<script setup lang="ts">
    import type { ProjectDefinition } from '~/data/projects';

    defineProps<ProjectDefinition>();
</script>

<template>
    <NuxtLink
        :href="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="flex items-center space-x-3 rounded-xl bg-dark-super p-3 transition hover:bg-opacity-80 md:space-x-6 md:p-6"
    >
        <img
            :src="image"
            :alt="name"
            class="flex h-full max-h-32 w-full max-w-32 rounded-full shadow"
        />

        <div class="w-2/3">
            <h3 class="mb-2 text-2xl font-semibold text-aqua-normal sm:text-3xl">
                {{ name }}
            </h3>
            <p class="text-white">{{ description }}</p>
        </div>
    </NuxtLink>
</template>

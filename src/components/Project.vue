<script setup lang="ts">
    import type { ProjectDefinition } from '@/data/projects';

    defineProps<ProjectDefinition>();
</script>

<template>
    <RouterLink
        :to="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="flex h-full items-center space-x-3 rounded-xl border-2 border-primary-500 p-2.5"
    >
        <div class="flex h-full w-2/3 flex-col">
            <h3
                class="align-self-end mb-1 font-mono text-lg font-semibold whitespace-nowrap text-white"
            >
                {{ name }}
            </h3>
            <p class="text-xs text-white">
                {{ description }}
            </p>
        </div>

        <div class="ml-auto rounded-2xl w-1/3">
            <img :src="image" :alt="name" class="rounded-3xl" />
        </div>
    </RouterLink>
</template>

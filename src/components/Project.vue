<script setup lang="ts">
    import type { ProjectDefinition } from '@/data/projects';
import Link from './Link.vue';

    defineProps<ProjectDefinition>();
</script>

<template>
    <Link
        :to="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="border-primary-500 flex items-center space-x-3 rounded-xl border-2 bg-teal-300/5 p-4 transition-colors hover:bg-teal-400/10"
    >
        <div class="flex h-full w-full flex-col mr-10">
            <h3
                class="align-self-end mb-1 font-mono text-2xl font-semibold whitespace-nowrap text-white"
            >
                {{ name }}
            </h3>
            <p class="text-white">
                {{ description }}
            </p>

            <ul class="mt-3 flex flex-wrap gap-2 text-xs text-blue-200">
                <li
                    v-for="skill in skills"
                    :key="skill"
                    class="h-fit rounded-lg border border-blue-300/50 px-1.5 py-1"
                >
                    {{ skill }}
                </li>
            </ul>
        </div>

        <div class="ml-auto w-1/3 max-w-[8rem] overflow-hidden rounded-3xl">
            <img :src="image" :alt="name" />
        </div>
    </Link>
</template>

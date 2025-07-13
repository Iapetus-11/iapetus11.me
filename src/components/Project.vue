<script setup lang="ts">
    import type { ProjectDefinition } from '@/data/projects';
    import Link from '@/components/Link.vue';
    import SkillList from './SkillList.vue';

    defineProps<ProjectDefinition>();
</script>

<template>
    <Link
        :to="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="group border-primary-500 flex items-center space-x-3 rounded-xl border-2 bg-teal-300/5 p-4 transition-[colors,opacity] hover:bg-teal-400/10"
    >
        <div class="mr-10 flex h-full w-full flex-col">
            <div
                class="align-self-end mb-1 flex items-center font-mono text-2xl font-semibold whitespace-nowrap text-white"
            >
                <h3>{{ name }}</h3>

                <span
                    class="icon-[hugeicons--link-square-02] ml-3 scale-0 text-purple-300 opacity-0 transition-[opacity,scale] group-hover:scale-100 group-hover:opacity-100"
                ></span>
            </div>

            <p class="text-white">
                {{ description }}
            </p>

            <SkillList :skills class="mt-3" />
        </div>

        <div class="ml-auto w-1/3 max-w-[8rem] overflow-hidden rounded-3xl">
            <img :src="image" :alt="name" />
        </div>
    </Link>
</template>

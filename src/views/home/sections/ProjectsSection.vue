<script setup lang="ts">
    import { PROJECTS } from '@/data/projects';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import ShowcaseCard from '@/components/ShowcaseCard.vue';

    const container = useTemplateRef('projects-container');
    const projectElements = computed(() => [
        ...((container.value?.children ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(projectElements);
</script>

<template>
    <div ref="projects-container" class="flex flex-col gap-6">
        <div class="lg:mb-2">
            <h2
                class="text-right font-mono text-2xl font-bold text-white/75 max-lg:text-center lg:-translate-x-10 lg:text-3xl"
            >
                Projects
            </h2>
        </div>

        <ShowcaseCard
            ref="project-components"
            v-for="(project, idx) in PROJECTS"
            :title="project.name"
            :link="project.link"
            :image="project.image"
            :description="project.description"
            :points="project.points"
            :key="project.name"
            :image-loading="idx <= 4 ? 'eager' : 'lazy'"
        />
    </div>
</template>

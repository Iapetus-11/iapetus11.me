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

<script setup lang="ts">
    import { PROJECTS } from '@/data/projects';
    import Project from './Project.vue';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('projects-container');
    const projectElements = computed(() => [
        ...((container.value?.children ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(projectElements);
</script>

<template>
    <div ref="projects-container" class="flex flex-col gap-6">
        <Project
            ref="project-components"
            v-for="(project, idx) in PROJECTS"
            v-bind="project"
            :key="project.name"
            :img-loading="idx <= 4 ? 'eager' : 'lazy'"
        />
    </div>
</template>

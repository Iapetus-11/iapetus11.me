<script setup lang="ts">
    import { PROJECTS } from '@/data/projects';
    import Project from '../../components/Project.vue';
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/effects';

    const container = useTemplateRef('projects-container');
    const projectElements = computed(() => [
        ...((container.value?.children ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(projectElements, { yTranslateFactor: 1.0 });
</script>

<template>
    <div ref="projects-container" class="flex flex-col gap-6">
        <Project
            ref="project-components"
            v-for="project in PROJECTS"
            v-bind="project"
            :key="project.name"
        />
    </div>
</template>

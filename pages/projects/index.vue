<script setup lang="ts">
    import Project from '~/pages/projects/Project.vue';
    import { PROJECTS } from '~/pages/projects/projects';

    definePageMeta({
        title: 'Projects',
    });
</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:gap-7 md:gap-10 lg:grid-cols-2 lg:max-xl:-mx-10">
        <Project
            v-for="(project, idx) in PROJECTS"
            v-bind="project"
            :key="project.name"
            class="animate-fade-in"
            :style="`animation-delay: ${idx * 50}ms`"
        />
    </div>
</template>

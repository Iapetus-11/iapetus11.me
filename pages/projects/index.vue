<script setup lang="ts">
    import Project from '~/components/Project.vue';
    import { PROJECTS } from '~/data/projects';

    definePageMeta({
        title: 'Projects',
    });

    defineRouteRules({
        prerender: true,
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

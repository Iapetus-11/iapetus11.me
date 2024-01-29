<script setup lang="ts">
    import Project from '~/pages/projects/Project.vue';
    import { PROJECTS } from '~/pages/projects/projects';

    definePageMeta({
        title: 'Projects',
    });
</script>

<template>
    <div class="grid grid-cols-1 gap-4 sm:gap-7 md:gap-10 lg:grid-cols-2 lg:max-xl:-mx-10">
        <Project v-for="project in PROJECTS" v-bind="project" :key="project.name" />
    </div>
</template>

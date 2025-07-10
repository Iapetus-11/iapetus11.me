<script setup lang="ts">
    import { PROJECTS } from '@/data/projects';
    import Project from '@/components/Project.vue';
</script>

<template>
    <div class="flex flex-col gap-6">
        <Project v-for="project in PROJECTS" v-bind="project" :key="project.name" />
    </div>
</template>

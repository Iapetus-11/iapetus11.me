<script setup lang="ts">
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
import Project from '@/components/Project.vue';
import { PROJECTS } from '@/data/projects';
    import { calculateYearsSince } from '@/utils/datetime';

    // TODO: Does this get in build data?
    const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
    const programmingForYears = calculateYearsSince(new Date('8/1/2016'));
</script>

<template>
    <DefaultLayout>
        <div class="flex flex-col gap-3.5">
            <p class="p-2.5 rounded-xl border-2 border-primary-500 mb-4">
                Hey! I'm Milo, a {{ aliveForYears }} year-old full-stack developer who's been programming for
                {{ programmingForYears }} years and loves to learn new things!
            </p>

            <Project v-for="project in PROJECTS" v-bind="project" :key="project.name" />
        </div>
    </DefaultLayout>
</template>

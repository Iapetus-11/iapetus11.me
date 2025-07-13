<script setup lang="ts">
    import ResumeItem from '@/components/ResumeItem.vue';
    import { RESUME_ITEMS } from '@/data/resume';
    import { useScrollCardEffect } from '@/utils/effects';
    import { computed, useTemplateRef } from 'vue';

    const container = useTemplateRef('resume-container');
    const resumeElements = computed(() => [
        ...(container.value?.querySelectorAll('div').values() ?? []),
    ]);

    useScrollCardEffect(resumeElements, { scaleDivisor: 4.0, yTranslateFactor: 16.0 });
</script>

<template>
    <div ref="resume-container" class="flex flex-col gap-6">
        <div class="flex flex-col mb-2 gap-2">
            <h2 class="text-3xl font-mono font-bold whitespace-nowrap">Resume / Timeline</h2>

            <p>
                I have not attended a university or bootcamp.
                I would claim to be self-taught, but that is not the case either.
                In addition to hard work and practice, mentors, teachers, friends, and family have helped me get where I am today and I am forever thankful.
            </p>
        </div>

        <ResumeItem
            v-for="item in RESUME_ITEMS"
            :key="[item.company, item.title, item.dateRange[0].toString()].join('|')"
            v-bind="item"
        />
    </div>
</template>

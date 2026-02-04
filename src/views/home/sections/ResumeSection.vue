<script setup lang="ts">
    import ResumeItem from './ResumeItem.vue';
    import { RESUME_ITEMS } from '@/data/resume';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import { computed, useTemplateRef } from 'vue';

    const container = useTemplateRef('resume-container');
    const resumeElements = computed(() => [
        ...(container.value?.querySelectorAll('div').values() ?? []),
    ]);

    useScrollCardEffect(resumeElements, {
        scaleModifier: 0.125,
        angleModifier: 30 * 1.125,
    });
</script>

<template>
    <div ref="resume-container" class="flex flex-col gap-6">
        <div class="mb-2 flex flex-col gap-2">
            <h2 class="font-mono text-3xl font-bold whitespace-nowrap max-md:text-center">
                Resume / Timeline
            </h2>

            <p class="md:text-lg">
                I have not attended a university or bootcamp. Despite that, I am only partially
                self-taught. I am thankful to my mentors, friends, teachers, and family who
                encouraged and helped me get to where I am today.
            </p>
        </div>

        <ResumeItem
            v-for="item in RESUME_ITEMS"
            :key="[item.company, item.title, item.dateRange[0].toString()].join('|')"
            v-bind="item"
        />
    </div>
</template>

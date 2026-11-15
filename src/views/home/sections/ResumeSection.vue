<script setup lang="ts">
    import ResumeItem from './ResumeItem.vue';
    import { RESUME_ITEMS } from '@/data/resume';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import { computed, useTemplateRef } from 'vue';

    const container = useTemplateRef('resume-container');
    const resumeElements = computed(() => [
        ...(container.value?.querySelectorAll('div').values() ?? []),
    ]);
    useScrollCardEffect(resumeElements);
</script>

<template>
    <div ref="resume-container" class="flex flex-col gap-6">
        <div class="lg:mb-2">
            <h2
                class="text-right font-mono text-2xl font-bold text-white/75 max-lg:text-center lg:-translate-x-10 lg:text-3xl"
            >
                Experience
            </h2>
        </div>

        <ResumeItem
            v-for="item in RESUME_ITEMS"
            :key="[item.company, item.title, item.dateRange[0].toString()].join('|')"
            v-bind="item"
        />
    </div>
</template>

<script setup lang="ts">
    import ResumeItem from './ResumeItem.vue';
    import { RESUME_ITEMS } from '@/data/resume';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';
    import { computed, useTemplateRef } from 'vue';

    const container = useTemplateRef('resume-container');
    const resumeElements = computed(() => [
        ...(container.value?.querySelectorAll('div').values() ?? []),
    ]);

    useScrollCardEffect(resumeElements, { opacityModifier: 0.65 });
</script>

<template>
    <div ref="resume-container" class="flex flex-col gap-6">
        <div class="mb-2 flex flex-col gap-2">
            <h2 class="font-mono text-3xl font-bold whitespace-nowrap max-md:text-center">
                Resume / Timeline
            </h2>

            <p class="md:text-lg">
                I have not attended a university or bootcamp. I would claim to be self-taught, but
                that is not the case either. In addition to hard work and practice, mentors,
                teachers, friends, and family have helped me get where I am today and I am forever
                thankful.
            </p>
        </div>

        <ResumeItem
            v-for="item in RESUME_ITEMS"
            :key="[item.company, item.title, item.dateRange[0].toString()].join('|')"
            v-bind="item"
        />
    </div>
</template>

<script setup lang="ts">
    import type { ResumeItemDefinition } from '@/data/resume';
    import SkillList from './SkillList.vue';

    defineProps<ResumeItemDefinition>();
</script>

<template>
    <div
        class="border-primary-500 flex flex-col rounded-xl border-2 bg-teal-300/5 p-4 transition-[colors,opacity] hover:bg-teal-400/10"
    >
        <h3 class="align-self-end font-mono text-xl font-semibold whitespace-nowrap text-white">
            {{ title }} <span class="text-slate-300">@</span> <span class="">{{ company }}</span>
        </h3>
        <span class="text-sm text-slate-300">
            {{ dateRange[0].toLocaleDateString(undefined, { dateStyle: 'medium' }) }}
            -
            <template v-if="dateRange[1] === null"> Now </template>
            <template v-else>
                {{ dateRange[1].toLocaleDateString(undefined, { dateStyle: 'medium' }) }}
            </template>
        </span>

        <ul class="mt-3 ml-5 text-sm text-white" style="list-style-type: '◦'">
            <li v-for="bullet in bullets" :key="bullet" class="pl-2">
                {{ bullet }}
            </li>
        </ul>

        <SkillList :skills class="mt-4" />
    </div>
</template>

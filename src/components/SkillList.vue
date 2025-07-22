<script setup lang="ts">
    defineProps<{
        skills: string[];
    }>();
</script>

<template>
    <ul class="flex flex-wrap gap-2 text-xs text-blue-200 md:text-sm">
        <li
            v-for="skill in skills"
            :key="skill"
            class="h-fit rounded-lg border border-blue-300/50 px-1.5 py-1"
        >
            {{ skill }}
        </li>
    </ul>
</template>

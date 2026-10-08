<script setup lang="ts">
    defineProps<{
        badges: string[];
    }>();
</script>

<template>
    <ul class="flex flex-wrap gap-2 text-xs text-blue-200 md:text-sm">
        <li
            v-for="badge in badges"
            :key="badge"
            class="h-fit rounded-lg border border-blue-300/50 px-1.5 py-1"
        >
            {{ badge }}
        </li>
    </ul>
</template>

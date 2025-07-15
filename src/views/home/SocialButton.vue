<script setup lang="ts">
    defineProps<{
        icon: string;
        link?: string;
    }>();

    const CLASSES = 'rounded-full p-1 text-slate-300 transition-colors hover:text-purple-300';
</script>

<template>
    <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noreferrer"
        :class="CLASSES"
    >
        <span :class="icon" class="text-xl"></span>
    </a>
    <button
        type="button"
        :class="CLASSES"
    >
        <span :class="icon" class="text-xl"></span>
    </button>
</template>

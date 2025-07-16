<script setup lang="ts">
    defineProps<{
        icon: string;
        link?: string;
    }>();

    const CLASSES =
        'rounded-full p-1 text-slate-300 transition-colors hover:text-purple-300 text-2xl scale-110';
</script>

<template>
    <a
        v-if="link"
        :href="link"
        target="_blank"
        rel="noreferrer"
        :class="CLASSES"
        class="text-slate-300"
    >
        <span :class="icon"></span>
    </a>
    <button v-else type="button" :class="CLASSES">
        <span :class="icon"></span>
    </button>
</template>

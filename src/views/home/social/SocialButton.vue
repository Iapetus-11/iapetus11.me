<script setup lang="ts">
    defineProps<{
        icon: string;
        name: string;
        link?: string;
    }>();

    const CLASSES =
        'rounded-full max-xs:p-1 md:p-1 text-slate-300 transition-[colors,scale] hover:text-purple-300 text-2xl scale-110 hover:scale-120 xs:max-md:flex xs:max-md:grow xs:max-md:items-center xs:max-md:justify-center xs:max-md:size-[33px]';
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
        <span class="sr-only">{{ name }}</span>
        <span :class="icon"></span>
    </button>
</template>

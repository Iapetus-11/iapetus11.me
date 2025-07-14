<script setup lang="ts">
    defineProps<{
        icon: string;
        link: string;
    }>();
</script>

<template>
    <a
        :href="link"
        target="_blank"
        class="rounded-full p-1 text-slate-300 transition-colors hover:text-purple-300"
    >
        <span :class="icon" class="text-xl"></span>
    </a>
</template>

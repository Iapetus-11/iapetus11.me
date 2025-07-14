<script setup lang="ts">
    defineProps<{
        icon: string,
        link: string,
    }>();
</script>

<template>
    <a :href="link" target="_blank" class="p-3 rounded-full">
        <span :class="icon"></span>
    </a>
</template>
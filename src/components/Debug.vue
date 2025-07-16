<script setup lang="ts">
    import { ref } from 'vue';

    const hidden = ref(false);
</script>

<template>
    <div
        v-if="!hidden"
        @click="hidden = true"
        class="fixed top-0 left-0 flex w-full flex-col gap-1"
    >
        <div class="h-[2px] w-[var(--breakpoint-xs)] bg-red-500">xs</div>
        <div class="h-[2px] w-[var(--breakpoint-sm)] bg-orange-500">sm</div>
        <div class="h-[2px] w-[var(--breakpoint-md)] bg-yellow-500">md</div>
        <div class="h-[2px] w-[var(--breakpoint-lg)] bg-green-500">lg</div>
        <div class="h-[2px] w-[var(--breakpoint-xl)] bg-blue-500">xl</div>
        <div class="h-[2px] w-[var(--breakpoint-2xl)] bg-violet-500">2xl</div>
    </div>
</template>

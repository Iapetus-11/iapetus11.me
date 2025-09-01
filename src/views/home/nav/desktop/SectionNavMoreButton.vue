<script setup lang="ts">
    const showingMore = defineModel<boolean>('showingMore', { required: true });
</script>

<template>
    <button
        type="button"
        class="group flex items-center text-lg font-medium text-gray-400 transition-colors hover:text-purple-300 2xl:text-xl"
        @click="showingMore = !showingMore"
    >
        <span
            class="mr-1.5 -ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-75"
            :class="[
                showingMore ? 'icon-[hugeicons--arrow-up-02]' : 'icon-[hugeicons--arrow-down-02]',
            ]"
        ></span>

        {{ showingMore ? 'Back' : 'More' }}
    </button>
</template>

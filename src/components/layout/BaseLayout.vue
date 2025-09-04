<script setup lang="ts">
    defineProps<{
        extraWidth?: boolean;
    }>();
</script>

<template>
    <div
        :class="extraWidth ? 'max-w-[60rem]' : 'max-w-[50rem]'"
        class="mx-auto flex min-h-screen flex-col items-center overflow-x-clip px-4 py-8 sm:px-8 md:py-10 lg:max-w-[95rem] lg:px-10 xl:py-16 2xl:py-22"
    >
        <slot />
    </div>
</template>

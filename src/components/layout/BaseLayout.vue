<script setup lang="ts">
    defineProps<{
        extraWidth?: boolean;
    }>();
</script>

<template>
    <!-- TODO: Many of these style are overriden, consider moving them to where they are used -->
    <div
        :class="extraWidth ? 'max-w-240' : 'max-w-200'"
        class="mx-auto flex min-h-screen flex-col items-start px-4 py-8 sm:px-8 md:py-10 lg:max-w-380 lg:px-10 xl:py-16 2xl:py-22"
    >
        <slot />
    </div>
</template>

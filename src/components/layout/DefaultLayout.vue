<script setup lang="ts">
    defineOptions({
        inheritAttrs: false,
    });
</script>

<template>
    <div
        class="mx-auto flex min-h-screen max-w-[90rem] flex-col items-center px-4 md:px-8 lg:px-10 py-6 md:py-22"
    >
        <div v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>

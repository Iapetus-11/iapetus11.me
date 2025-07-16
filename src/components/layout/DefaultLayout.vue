<script setup lang="ts">
    defineOptions({
        inheritAttrs: false,
    });
</script>

<template>
    <div
        class="mx-auto flex min-h-screen max-w-[50rem] flex-col items-center px-4 py-8 md:py-10 lg:max-w-[90rem] lg:px-10 xl:py-16 2xl:py-22"
    >
        <div v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>

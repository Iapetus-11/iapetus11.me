<script setup lang="ts">
    defineOptions({
        inheritAttrs: false,
    });
</script>

<template>
    <div
        class="mx-auto flex min-h-screen max-w-[90rem] flex-col items-center px-4 pb-8 md:px-8 lg:px-10 lg:pb-8 xl:pb-12"
    >
        <div v-bind="$attrs">
            <slot />
        </div>
    </div>
</template>

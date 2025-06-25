<script setup lang="ts">
    import type { NuxtError } from '#app';

    const props = defineProps<{
        error: NuxtError;
    }>();

    const title = computed<string>(
        () =>
            ({
                404: 'Page Not Found',
            })[props.error.statusCode] ?? `Error (${props.error.statusCode})`
    );

    useHead({
        title: title,
        bodyAttrs: {
            class:
                'select-none bg-dark-dark bg-gradient-to-r from-dark-dark via-dark-light via-dark-normal ' +
                'to-dark-dark',
        },
    });
</script>

<template>
    <div
        class="mx-auto mt-2 mb-6 max-w-[90vw] min-w-screen md:mt-10 md:mb-14 lg:max-w-[80vw] xl:max-w-[70vw]"
    >
        <div class="my-6 flex items-center justify-center gap-4 md:my-10 md:justify-end">
            <!-- <NavigationPages /> -->
            TODO: nav pages here buddy
        </div>
    </div>

    <div
        class="fixed top-1/2 right-1/2 flex translate-x-1/2 -translate-y-[70%] flex-col text-white"
    >
        <h1 class="text-center text-8xl font-bold">{{ error.statusCode }}</h1>
        <span class="text-center text-xl">{{ error.message }}</span>
    </div>
</template>

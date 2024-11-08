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
        class="min-w-screen mx-auto mb-6 mt-2 max-w-[90vw] md:mb-14 md:mt-10 lg:max-w-[80vw] xl:max-w-[70vw]"
    >
        <div class="my-6 flex items-center justify-center gap-4 md:my-10 md:justify-end">
            <NavigationPages />
        </div>
    </div>

    <div
        class="fixed right-1/2 top-1/2 flex -translate-y-[70%] translate-x-1/2 flex-col text-white"
    >
        <h1 class="text-center text-8xl font-bold">{{ error.statusCode }}</h1>
        <span class="text-center text-xl">{{ error.message }}</span>
    </div>
</template>

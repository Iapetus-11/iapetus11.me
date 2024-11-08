<script setup lang="ts">
    import type { NuxtError } from '#app';


    const props = defineProps<{
        error: NuxtError;
    }>();

    const title = computed<string>(() => ({
        404: 'Page Not Found',
    }[props.error.statusCode] ?? 'Error'));

    useHead({
        title: 'Title',
        bodyAttrs: {
            class:
                'select-none bg-dark-dark bg-gradient-to-r from-dark-dark via-dark-light via-dark-normal ' +
                'to-dark-dark',
        },
    });
</script>

<template>
    <code class="text-white font-mono">
        {{ error }}
    </code>
</template>

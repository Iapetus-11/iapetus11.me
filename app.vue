<script setup lang="ts">
    const route = useRoute();

    useHead({
        title: route.meta.title || 'Milo Weinberg',
        bodyAttrs: {
            class:
                'select-none bg-dark-dark bg-gradient-to-r from-dark-dark via-dark-light via-dark-normal ' +
                'to-dark-dark',
        },
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

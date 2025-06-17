<script setup lang="ts">
    const route = useRoute();

    useHead({
        title: route.meta.title || 'Milo Weinberg',
        bodyAttrs: {
            class: 'select-none bg-dull',
        },
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

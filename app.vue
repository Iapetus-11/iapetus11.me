<script setup lang="ts">
    const route = useRoute();

    useHead({
        title: route.meta.title || 'Milo Weinberg',
        bodyAttrs: {
            class: 'select-none bg-[#232333]',
        },
    });
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

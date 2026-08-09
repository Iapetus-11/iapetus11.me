<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';

    interface Props {
        title: string;
        extraWidth?: boolean;
    }

    defineProps<Props>();
</script>

<template>
    <PageLayout :extra-width>
        <template #title>
            <RouterLink :to="{ name: 'blog' }"> Blog </RouterLink>

            <h1>{{ title }}</h1>
        </template>

        <slot />
    </PageLayout>
</template>

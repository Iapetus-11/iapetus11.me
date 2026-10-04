<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';

    interface Props {
        title: string;
        extraWidth?: boolean;
    }

    defineProps<Props>();
</script>

<template>
    <PageLayout :extra-width :title>
        <template #subheading>
            <RouterLink :to="{ name: 'blog' }" class="text-lg text-white/75">
                Back to posts
            </RouterLink>

            <slot name="subheading" />
        </template>

        <slot />
    </PageLayout>
</template>

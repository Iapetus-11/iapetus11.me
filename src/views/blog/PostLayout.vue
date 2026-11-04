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
            <div class="flex">
                <RouterLink
                    :to="{ name: 'blog' }"
                    class="px-1 text-gray-300/80 transition hover:-translate-x-1 hover:text-white max-md:hidden"
                >
                    <span class="icon-[hugeicons--arrow-left-01] -translate-y-0.25"></span>
                </RouterLink>

                <h1>
                    {{ title }}
                </h1>
            </div>
        </template>

        <template #subheading>
            <RouterLink :to="{ name: 'blog' }" class="-mt-1 block text-lg text-white/75 md:hidden">
                <span class="icon-[hugeicons--arrow-left-01] -mr-0.5 translate-y-0.75"></span>
                Back to posts
            </RouterLink>

            <slot name="subheading" />
        </template>

        <slot />
    </PageLayout>
</template>

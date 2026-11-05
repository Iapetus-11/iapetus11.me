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
            <div class="flex *:whitespace-nowrap">
                <RouterLink
                    :to="{ name: 'blog' }"
                    class="group peer flex text-white/75 transition hover:text-white max-lg:hidden"
                >
                    <span
                        class="icon-[hugeicons--arrow-left-01] w-0 -translate-y-0.5 transition-[width] group-hover:w-12 hover:w-12"
                    ></span>

                    Blog
                </RouterLink>

                <span class="block w-14 text-center text-white/75 max-lg:hidden">/</span>

                <h1 class="inline transition-colors peer-hover:text-white/75">
                    {{ title }}
                </h1>
            </div>
        </template>

        <template #subheading>
            <RouterLink :to="{ name: 'blog' }" class="-mt-1 block text-lg text-white/75 lg:hidden">
                <span class="icon-[hugeicons--arrow-left-01] -mr-0.5 translate-y-0.75"></span>
                Back to posts
            </RouterLink>

            <slot name="subheading" />
        </template>

        <slot />
    </PageLayout>
</template>

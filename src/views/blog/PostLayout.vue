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
                    class="group peer flex text-white/75 transition hover:text-white max-lg:hidden"
                >
                    <span class="block h-full">
                        <span
                            class="icon-[hugeicons--arrow-left-01] w-0 -translate-y-0.5 transition-[width] group-hover:w-12 hover:w-12"
                        ></span>
                    </span>

                    Blog
                </RouterLink>

                <span class="block w-14 text-center text-white/75 max-lg:hidden">/</span>

                <h1 class="transition-colors peer-hover:text-white/75 max-md:mb-2">
                    {{ title }}
                </h1>
            </div>
        </template>

        <template #subheading>
            <RouterLink
                :to="{ name: 'blog' }"
                class="group -mt-1 block text-lg text-white/75 transition hover:text-white lg:hidden"
            >
                <span
                    class="icon-[hugeicons--arrow-left-01] -mr-1 translate-y-0.75 transition group-hover:-translate-x-0.5"
                ></span>
                Back to posts
            </RouterLink>

            <slot name="subheading" />
        </template>

        <slot />
    </PageLayout>
</template>

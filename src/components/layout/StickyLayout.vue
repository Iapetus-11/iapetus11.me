<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';
</script>

<style scoped>
    @reference '@/assets/main.css';

    .sticky-container {
        @apply flex flex-col gap-y-5 self-start pb-8 max-lg:h-fit! md:top-10 md:h-[calc(100vh-2.5rem)] md:pb-12 lg:sticky lg:-mb-100 xl:top-16 xl:h-[calc(100vh-4rem)] xl:w-[32%] xl:shrink-0 2xl:top-22 2xl:h-[calc(100vh-5.5rem)];
    }
</style>

<template>
    <BaseLayout>
        <div class="flex flex-col items-center lg:flex-row lg:gap-x-32 xl:gap-x-48">
            <!-- top-* and h-[calc(...)] here must match the y padding in <DefaultLayout> -->
            <div class="sticky-container">
                <slot name="sticky" />
            </div>

            <div class="grow">
                <slot name="scrollable" />
            </div>
        </div>
    </BaseLayout>
</template>

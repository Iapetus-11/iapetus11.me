<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
</script>

<style scoped>
    @reference '@/assets/main.css';

    img {
        @apply rounded-xl shadow-lg max-sm:translate-x-0 max-sm:translate-y-0 max-sm:scale-100;
    }
</style>

<template>
    <PageLayout title="Miata">
        <div class="grid grid-cols-3">
            <div class="border-primary-500 border-2 bg-teal-300/5 p-3 rounded-xl">
                <p>
                    I own a 2023 ND Miata! I have lightly modified it, not much yet, but with bigger plans for the future.
                </p>
            </div>

            <div class="col-span-2">
                ...
            </div>
        </div>
    </PageLayout>
</template>
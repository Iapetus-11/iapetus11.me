<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import Pictures from './Pictures.vue';
    import Mods from './Mods.vue';
</script>

<template>
    <PageLayout title="Miata" extra-width>
        <div class="grid grid-cols-1 gap-4 md:gap-16 md:grid-cols-2">
            <div class="flex flex-col gap-4 md:-mt-6 lg:-mt-8">
                <p>
                    I own a 2023 ND Miata (after my girlfriend decided she had enough of me whining
                    about wanting a fast car)! It's very cute and carving through twisty mountain
                    roads (especially in a convertible) is exhilarating fun.
                </p>

                <h2 class="mt-1 font-mono text-3xl font-semibold">Modifications?</h2>

                <Mods />
            </div>

            <div class="grid h-fit grid-cols-1 gap-3 lg:gap-2 lg:grid-cols-2">
                <Pictures />
            </div>
        </div>
    </PageLayout>
</template>

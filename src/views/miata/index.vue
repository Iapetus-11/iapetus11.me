<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import Images from './Images.vue';
    import Mods from './Mods.vue';
</script>

<template>
    <PageLayout title="Miata" extra-width>
        <div class="grid grid-cols-2 gap-16">
            <div class="flex flex-col gap-4 md:-mt-6 lg:-mt-8">
                <p>
                    I own a 2023 ND Miata (after my girlfriend decided she had enough of me whining
                    about wanting a fast car)! It's very cute and carving through twisty mountain
                    roads (especially in a convertible) is exhilarating fun.
                </p>

                <h2 class="mt-1 font-mono text-3xl font-semibold">Modifications?</h2>

                <Mods />
            </div>

            <div class="grid grid-cols-1 *:col-span-1 *:rounded-xl xl:grid-cols-2">
                <Images />
            </div>
        </div>
    </PageLayout>
</template>

<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import Pictures from './Pictures.vue';
    import Mods from './Mods.vue';
    import { useSeo } from '@/utils/head';

    useSeo({
        title: 'Milo | Miata',
        url: 'https://iapetus11.me/miata',
        description: 'A page dedicated to my beloved 2023 ND Miata',
    });
</script>

<template>
    <PageLayout title="Miata" extra-width>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-16">
            <div class="flex flex-col gap-4 md:-mt-6 lg:-mt-8">
                <p>
                    I bought a 2023 ND Miata after my girlfriend decided they had enough of me
                    whining about wanting a sports car! It's very cute, and carving through twisty
                    mountain roads (especially in a convertible) is exhilarating fun.
                </p>

                <h2 class="mt-1 font-mono text-3xl font-semibold">Modifications?</h2>

                <Mods />
            </div>

            <div class="grid h-fit grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-2">
                <Pictures />
            </div>
        </div>
    </PageLayout>
</template>

<script setup lang="ts">
    import PageLayout from '@/components/layout/PageLayout.vue';
    import Images from './Images.vue';
</script>

<template>
    <PageLayout title="Miata" extra-width>
        <div class="grid grid-cols-2 gap-6">
            <div class="flex flex-col gap-2.5 md:-mt-6 lg:-mt-8">
                <p>
                    I own a 2023 ND Miata (after my girlfriend decided she had enough of me whining
                    about wanting a fast car)! It's very cute and carving through twisty mountain
                    roads (especially in a convertible) is exhilarating fun.
                </p>

                <h2 class="mt-3 font-mono text-3xl font-semibold">Modifications?</h2>

                <h3 class="mt-2 font-mono text-xl font-semibold">
                    Dashcam + Radar Detector Hardwire
                </h3>
                <p>
                    One of the first things I did was hardwire a dashcam (a BlackVue [INSERT MODEL],
                    which while mostly good I no longer would recommend due to BlackVue's app now
                    requiring a sign-in and being slow + buggy).
                </p>
                <p>
                    The wiring was ran above the windshield and through the A-pillar down to the
                    interior fusebox. I used fuse taps and a breakout board to power both, and an
                    extra fuse tap so the dashcam could remain recording on battery power when the
                    engine is off.
                </p>
                <p>
                    Unsure if I'd consider a BlendMount for the future as I had to position both
                    devices carefully due to the already limited visibility through the tiny
                    windshield.
                </p>

                <h3 class="mt-2 font-mono text-xl font-semibold">Paco Motorsports Seat Lowering</h3>
                <p>
                    I plan to track this car in the future, but there are extra requirements with a
                    convertible. In the event of a roll-over crash, your head (including helmet)
                    must be below the top of the windshield and the roll hoops behind the seat.
                    Unfortunately, I have an XL-sized head which does poke out a little bit with a
                    helmet.
                </p>
                <p>Lowering my seat</p>
            </div>

            <div class="grid grid-cols-1 *:col-span-1 *:rounded-xl lg:grid-cols-2">
                <Images />
            </div>
        </div>
    </PageLayout>
</template>

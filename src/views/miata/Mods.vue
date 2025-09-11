<script lang="ts">
    import { type InjectionKey, type Ref } from 'vue';

    export enum ModId {
        DashcamAndRadarDetectorHardwire,
        PacoMotorsportsSeatLowering,
    }

    export const OPEN_MOD_INJECTION_KEY: InjectionKey<Ref<ModId | null>> = Symbol();
</script>

<script setup lang="ts">
    import Mod from './Mod.vue';
    import { provide, ref } from 'vue';

    provide(OPEN_MOD_INJECTION_KEY, ref(ModId.DashcamAndRadarDetectorHardwire));
</script>

<template>
    <Mod :mod-id="ModId.DashcamAndRadarDetectorHardwire" title="Dashcam + Radar Detector Hardwire">
        <p>
            One of the first things I did was hardwire a dashcam (a BlackVue [INSERT MODEL], which
            while mostly good I no longer would recommend due to BlackVue's app now requiring a
            sign-in and being slow + buggy).
        </p>
        <p>
            The wiring was ran above the windshield and through the A-pillar down to the interior
            fusebox. I used fuse taps and a breakout board to power both, and an extra fuse tap so
            the dashcam could remain recording on battery power when the engine is off.
        </p>
        <p>
            Unsure if I'd consider a BlendMount for the future as I had to position both devices
            carefully due to the already limited visibility through the tiny windshield.
        </p>
    </Mod>

    <Mod :mod-id="ModId.PacoMotorsportsSeatLowering" title="Paco Motorsports Seat Lowering">
        <p>
            I plan to track this car in the future, but there are extra requirements with a
            convertible. In the event of a roll-over crash, your head (including helmet) must be
            below the top of the windshield and the roll hoops behind the seat. Unfortunately, I
            have an XL-sized head which does poke out a little bit with a helmet.
        </p>
        <p>
            Lowering my seat took two days (I gave up on the first day, turns out working in a hot
            parking lot sucks and you'll get sunburned). I actually had to take the seat back out of
            the car and redo the mounting of the rails as the instructions aren't updated for the
            new four-slot rail design.
        </p>
    </Mod>
</template>

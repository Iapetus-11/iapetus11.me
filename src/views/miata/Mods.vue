<script setup lang="ts">
    import Mod from './Mod.vue';
    import { ModId, provideModDisclosureState } from './modDisclosureState';

    provideModDisclosureState();
</script>

<template>
    <Mod :mod-id="ModId.DashcamAndRadarDetectorHardwire" title="Dashcam + Radar Detector Hardwire">
        <p>
            One of the first things I did was hardwire a dashcam, a BlackVue DR770X-1CH, which,
            while mostly good, I would no longer recommend because BlackVue's app now requires a
            sign-in and is slow and buggy.
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
            I plan to track this car in the future, but with a convertible your head (including helmet)
            must be below the top of the windshield and the roll hoops behind the seat.
            Unfortunately, I have an XL-sized head which does poke out a little bit with a helmet.
        </p>
        <p>
            Lowering my seat took two days (I gave up on the first day, turns out working in a hot
            parking lot sucks and you'll get sunburned). I actually also had to take the seat back
            out of the car and redo the mounting of the rails as the instructions aren't updated for
            the new four-slot rail design.
        </p>
        <p>Fortunately I do now fit, and hopefully I can visit a track soon.</p>
    </Mod>

    <Mod :mod-id="ModId.TheFuture" title="Future Plans">
        <p>
            I have a big list of parts and ideas for the future, and not enough money to make it
            happen fast enough. Here are some of the highlights (in no particular order):
        </p>
        <ul
            class="[&>li>a]:text-link ml-3 list-outside space-y-1 [&>li>*]:ml-1.5"
            style="list-style-type: disc; list-style-type: '◦'"
        >
            <li>
                <a
                    href="https://www.miataspeed.com/products/edelbrock-e-force-supercharger-no-tune-2016-mazda-mx-5-nd-miata-1"
                    target="_blank"
                    rel="noreferrer"
                >
                    MiataSpeed/Edelbrock supercharger</a
                >
                - Would be nice to have some extra power, and I don't want any turbo lag.
            </li>
            <li>
                <a
                    href="https://flyinmiata.com/products/nd-flyin-miata-sway-bars"
                    target="_blank"
                    rel="noreferrer"
                >
                    Flyin' Miata sway bars</a
                >
                - The body roll is crazy on these cars, but I think I'll wait to see how she does on
                the track before this.
            </li>
            <li>
                <a
                    href="https://auroraautodesign.com/products/blackbird-fabworx-nd-rz-roll-bar-scca-legal-and-soft-top-compatible"
                    target="_blank"
                    rel="noreferrer"
                >
                    Blackbird ND Roll Bar</a
                >
                - Not a fan of the extra weight, but I'd rather be safe.
            </li>
            <li>
                <a
                    href="https://www.good-win-racing.com/Mazda-Performance-Part/61-1958.html"
                    target="_blank"
                    rel="noreferrer"
                >
                    SUPER-Q twin tip exhaust</a
                >
                - I would love some more (louder & deeper) sound out of my car without it being
                obnoxious.
            </li>
        </ul>
    </Mod>
</template>

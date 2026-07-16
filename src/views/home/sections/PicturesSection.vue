<script setup lang="ts">
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/scrollCardEffect';

    const container = useTemplateRef('pictures-container');
    const imgElements = computed(() => [...((container.value?.children ?? []) as HTMLElement[])]);

    const { updateElements: updateScrollCardEffect } = useScrollCardEffect(imgElements, {
        scaleModifier: 0.125,
        angleModifier: 30 * 0.75,
    });
</script>

<style scoped>
    @reference '@/assets/main.css';

    img {
        @apply rounded-xl shadow-lg max-sm:mt-0 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:scale-100;
    }
</style>

<template>
    <div
        ref="pictures-container"
        class="flex grid-cols-2 flex-col-reverse max-sm:gap-3 sm:grid xl:max-2xl:-translate-x-10"
    >
        <div class="z-15">
            <img
                src="@/assets/images/me/milo-crowders-mtn.webp"
                alt="Me at Crowder's Mountain"
                loading="lazy"
                class="translate-x-5"
                @load="updateScrollCardEffect"
                width="1024"
                height="770"
            />
        </div>
        <div class="-z-10">
            <img
                src="@/assets/images/miata/grandfather-mtn-oct2025-sq.webp"
                alt="Miata in fall at grandfather mountain"
                loading="lazy"
                class="-mt-20 translate-x-7 translate-y-2 scale-110"
                @load="updateScrollCardEffect"
                width="901"
                height="734"
            />
        </div>
        <div class="z-10">
            <img
                src="@/assets/images/me/milo-trinity-airb-dr.webp"
                alt="Trinity and I in the Dominican Republic"
                width="1024"
                height="866"
                loading="lazy"
                class="-translate-x-10 -translate-y-13"
                @load="updateScrollCardEffect"
            />
        </div>
        <div class="z-15">
            <img
                src="@/assets/images/me/milo-trinity-teleferico-dr.webp"
                alt="Trinity and I on the teleférico"
                width="2032"
                height="1536"
                loading="lazy"
                class="-translate-y-10 scale-110"
                @load="updateScrollCardEffect"
            />
        </div>
        <div class="z-10">
            <img
                src="@/assets/images/miata/parking-lot-sunset.webp"
                alt="Miata in parking lot close to sunset"
                width="1024"
                height="770"
                loading="lazy"
                class="-translate-y-20"
                @load="updateScrollCardEffect"
            />
        </div>
        <div class="z-5">
            <img
                src="@/assets/images/me/milo-cold-drive.webp"
                alt="Me driving the Miata"
                loading="lazy"
                class="-translate-x-4 -translate-y-28"
                @load="updateScrollCardEffect"
                width="1024"
                height="1009"
            />
        </div>
    </div>
</template>

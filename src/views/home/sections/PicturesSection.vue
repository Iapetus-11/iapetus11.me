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
        <div class="z-10">
            <img
                src="@/assets/images/me/me-asheville-blue-wall.webp"
                alt="Me in Asheville"
                loading="lazy"
                class="translate-y-15 scale-80"
                @load="updateScrollCardEffect"
                width="768"
                height="614"
            />
        </div>
        <div class="z-10">
            <img
                src="@/assets/images/me/trinity-and-i-park.webp"
                alt="Trinity and I at a park"
                loading="lazy"
                class="-translate-x-12 -translate-y-6.5"
                @load="updateScrollCardEffect"
                width="768"
                height="577"
            />
        </div>
        <div class="-z-10">
            <img
                src="@/assets/images/miata/grandfather-mtn-oct2025-sq.webp"
                alt="Miata in fall at grandfather mountain"
                loading="lazy"
                class="-mt-20 translate-y-2 scale-110"
                @load="updateScrollCardEffect"
                width="1024"
                height="605"
            />
        </div>
        <div class="z-15">
            <img
                src="@/assets/images/miata/elk-mountain-graffiti-rd-angled.webp"
                alt="Miata at Elk Mountain Scenic Highway"
                loading="lazy"
                class="-translate-y-16"
                @load="updateScrollCardEffect"
                width="1024"
                height="453"
            />
        </div>
        <div class="z-5">
            <img
                src="@/assets/images/me/me-and-trinity-icecream.webp"
                alt="Trinity and I getting icecream"
                loading="lazy"
                class="-translate-x-2 translate-y-2"
                @load="updateScrollCardEffect"
                width="1024"
                height="768"
            />
        </div>
        <div class="z-5">
            <img
                src="@/assets/images/miata/parking-lot-sunset.webp"
                alt="Miata in parking lot close to sunset"
                loading="lazy"
                class="-translate-y-18 scale-110"
                @load="updateScrollCardEffect"
                width="1024"
                height="770"
            />
        </div>
        <div class="z-10">
            <img
                src="@/assets/images/me/me-ny.webp"
                alt="Me in NY"
                loading="lazy"
                class="translate-x-48 -translate-y-17"
                @load="updateScrollCardEffect"
                width="1024"
                height="958"
            />
        </div>
    </div>
</template>

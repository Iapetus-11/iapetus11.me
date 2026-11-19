<script setup lang="ts">
    import PostLayout from '../../PostLayout.vue';
    import { SITE_URL, useSeo } from '@/utils/head';

    useSeo({
        title: 'Milo | Good Code & Engineering',
        description: 'Some learnings from my (so far short) software engineering career',
        url: `${SITE_URL}blog/good-engineering`,
    });
</script>

<template>
    <PostLayout title="Good Code & Engineering">
        <div ref="container" class="pointer-events-none absolute inset-0">
            <marquee direction="down" width="100%" height="100%" behavior="alternate">
                <marquee behavior="alternate">
                    <img
                        src="@/assets/images/under-construction.gif"
                        alt="under construction"
                        class="lg:scale-110 xl:scale-120"
                    />
                </marquee>
            </marquee>
        </div>

        <div ref="container" class="pointer-events-none absolute inset-0">
            <marquee direction="up" behavior="alternate" width="100%" height="100%">
                <marquee behavior="alternate" scrolldelay="30" truespeed>
                    <img
                        src="@/assets/images/under-construction.gif"
                        alt="under construction"
                        class="lg:scale-110 xl:scale-120"
                        style="animation: spin 3s linear infinite"
                    />
                </marquee>
            </marquee>
        </div>
    </PostLayout>
</template>

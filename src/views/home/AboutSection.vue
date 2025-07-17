<script setup lang="ts">
    import { computed, useTemplateRef } from 'vue';
    import { useScrollCardEffect } from '@/utils/effects';

    const container = useTemplateRef('about-container');
    const aboutMeElements = computed(() => [
        ...((container.value?.children ?? []) as HTMLElement[]),
    ]);

    useScrollCardEffect(aboutMeElements);
</script>

<template>
    <div ref="about-container" class="[&>p]:leading-relaxed">
        <h2 class="font-mono text-3xl font-bold whitespace-nowrap max-md:text-center mb-6">
            About Me
        </h2>

        <p>
            I've been programming since 7th grade and I love it. I started off doing CMD/batch
            scripts to make fake matrix effects, small text-based games, and small pranks like
            popping the CD drive open. Shortly after that, I started learning basic HTML and CSS, I
            wish I still had access to those projects.
        </p>
        <p class="mt-2.5">
            In high school I joined a robotics team (FRC) and started learning Java. I still sucked.
            Around this time I started learning Python and working on Villager Bot, which I credit
            for most of my growth and learning as a programmer. I also self-hosted a Minecraft
            server, built a community, and even wrote custom datapacks and plugins.
        </p>
        <p class="mt-2.5">
            Through Villager Bot I learned a ton, interacting with different APIs, websockets,
            asyncio, webhooks, and so much more. Through working on Villager Bot, I met friends,
            worked on libraries published on PYPI, and even made a few bucks from donations. Without
            Villager Bot I would certainly not be where I am today.
        </p>
        <p class="mt-2.5">
            It was around late highschool where I started doing freelancing. I worked for mostly
            invididuals, making Discord bots and other small scripts. I did have the chance to work
            for a few small companies building web scrapers and Twitter/Reddit bots as well. I did
            unfortunately learn the hard lesson of getting your money before delivering the product,
            several times haha.
        </p>
        <p class="mt-2.5">
            After high school I did start college through Clemson's bridge program. While I tried to
            make friends and excel in my classes, I found that the environment was truly not good
            for me. I was not able to learn what I wanted, and my mental health was suffering. I did
            however, make connections (which I came to find very helpful later).
        </p>
        <p class="mt-2.5">
            After my first year I was stuck between the expectations of my parents and my desparate
            urge to escape and do what I loved. During the tail-end of the COVID-19 epidemic, I
            started applying to dozens of jobs. I only heard back from three places: ghosted by one,
            interviewed and ghosted by another, but finally thanks to a friend from Clemson I had a
            lucky break.
        </p>
        <p class="mt-2.5">
            Someone at MedShift saw my resume and believed in me. I'm still at MedShift nearly three
            years later.
        </p>
    </div>
</template>

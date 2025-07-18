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
        <h2 class="mb-6 font-mono text-3xl font-bold whitespace-nowrap max-md:text-center">
            About Me
        </h2>

        <p>
            I've been programming since 7th grade and I love it. I started off doing CMD/batch
            scripts to make fake Matrix effects, small text-based games, and small pranks like
            popping the CD drive open. Shortly after that, I started learning basic HTML, CSS, along
            with a little JavaScript.
        </p>
        <p class="mt-2.5">
            In high school, I joined a robotics team (FRC) and started learning Java. Around this
            time I started learning Python and working on Villager Bot, which I credit for a
            substantial amount of my growth and learning as a programmer. I also self-hosted a
            Minecraft server, built a community, and even wrote custom datapacks and plugins for it.
        </p>
        <p class="mt-2.5">
            Villager Bot helped me learn a ton, interacting with different APIs, websockets,
            asyncio, webhooks, and so much more. Through working on Villager Bot, I met friends,
            worked on libraries published on PyPI, and even made a small amount of money from
            donations. Without that project, I would certainly not be where I am today.
        </p>
        <p class="mt-2.5">
            It was around late high school when I started doing freelance programming. I worked for
            primarily individuals, making Discord bots and other small scripts. I also had the
            chance to work for a few small companies building web scrapers and Twitter/Reddit bots.
            I unfortunately learned the lesson of getting your $$ before delivering the product, the
            hard way, several times haha.
        </p>
        <p class="mt-2.5">
            After high school, I started college through Clemson's bridge program. While I tried to
            make friends and excel in my classes, I found that the environment was truly not a good
            fit for me. I did not have any opportunities to learn what I wanted, and my mental
            health was suffering. I did however make connections (which I came to find very helpful
            later).
        </p>
        <p class="mt-2.5">
            After my first year, I was stuck between the expectations of my parents and my desperate
            urge to escape and do what I loved. During the tail-end of the COVID-19 epidemic, I
            started applying to dozens of jobs. I only heard back from three places: ghosted by one,
            interviewed and ghosted by another. But finally, thanks to a friend from Clemson, I got
            a lucky break.
        </p>
        <p class="mt-2.5">
            Someone at MedShift saw my resume, believed in me, and gave me a chance. I'm still at
            MedShift nearly three years later, working as a Senior Engineer across two teams and
            several projects.
        </p>
    </div>
</template>

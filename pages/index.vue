<script setup lang="ts">
    import { createTimeline, stagger } from 'animejs';
    import { calculateYearsSince } from '~/utils/datetime';
    import { createWAAPITimeline } from '~/utils/animationHelpers';
    // import Skill from '~/components/Skill.vue';
    // import { SKILLS } from '~/data/skills';

    definePageMeta({
        title: false,
    });

    defineRouteRules({
        prerender: true,
    });

    const ABOUT_ME = (() => {
        const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
        const programmingForYears = calculateYearsSince(new Date('8/1/2016'));

        return (
            `Hey! I'm Milo, a ${aliveForYears} year-old full-stack developer who's been programming for ` +
            `${programmingForYears}+ years and loves to learn new things!`
        );
    })();

    const profilePictureEl = useTemplateRef('profile-picture');
    const aboutMeTextEl = useTemplateRef('about-me-text');

    function animateLogo() {
        registerCSSProperty({
            name: '--profile-picture-saturation',
            syntax: '<percentage>',
            inherits: false,
            initialValue: '0%',
        });

        createWAAPITimeline(
            [
                { opacity: [0, 0.35], duration: 180, delay: 0 },
                { opacity: [0.35, 0.18], duration: 80, delay: 180 },
                { opacity: [0.18, 0.45], duration: 110, delay: 260 },
                { opacity: [0.45, 0.7], duration: 250, delay: 370 },
                { opacity: [0.7, 0.5], duration: 80, delay: 620 },
                { opacity: [0.5, 0.8], duration: 120, delay: 700 },
                { opacity: [0.8, 1], duration: 400, delay: 820 },
                { '--profile-picture-saturation': ['10%', '100%'], duration: 1000 },
            ],
            { targets: profilePictureEl.value!, delayMs: 750 }
        );
    }

    function animateAboutMeText() {
        const aboutMeChars = aboutMeTextEl.value!.$el.querySelectorAll('span');

        createWAAPITimeline([
            {
                color: ['#FF00FF', '#FFFFFF'],
                duration: 1000,
                delay: stagger(10),
            },
            {
                opacity: [0, 1],
                duration: () => Math.random() * 1500,
                delay: stagger(11),
                ease: 'linear',
                alternate: true,
            },
        ], { targets: aboutMeChars, delayMs: 600 });
    }

    function startAnimations() {
        animateLogo();
        animateAboutMeText();
    }

    onMounted(startAnimations);
    onUpdated(startAnimations);
</script>

<template>
    <div class="grid h-full w-full grid-cols-3">
        <div>
            <AnimatedCircleOutline :delay-ms="100" :border-width-px="1">
                <img
                    ref="profile-picture"
                    src="~/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="bg-glow glow-aqua mb-10 !rounded-full opacity-0"
                    style="filter: saturate(var(--profile-picture-saturation))"
                />
            </AnimatedCircleOutline>

            <p>
                <AnimateableText
                    ref="about-me-text"
                    class="*:opacity-0 text-lg"
                    style="overflow-wrap: break-word"
                >
                    {{ ABOUT_ME }}
                </AnimateableText>
            </p>
        </div>
    </div>
</template>

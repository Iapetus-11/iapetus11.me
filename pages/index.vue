<script setup lang="ts">
    import { createTimeline, stagger } from 'animejs';
    import { calculateYearsSince } from '~/utils/datetime';
    import { createWAAPITimeline } from '~/utils/animationHelpers';
    // import Skill from '~/components/Skill.vue';
    // import { SKILLS } from '~/data/skills';

    definePageMeta({
        layout: 'home',
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
    const fakeLoadingBarEl = useTemplateRef('fake-loading-bar');
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

    function animateFakeLoadingBar() {
        createWAAPITimeline(
            [
                {
                    y: ['100vh', '0vh'],
                    x: ['-15%', '0%'],
                    opacity: 0.75,
                    duration: 1750,
                    delay: 0,
                },
                {
                    opacity: [1, 0.3, 1],
                    duration: 250,
                    delay: 200,
                },
                {
                    opacity: [1, 0.5, 1, 0.75, 1],
                    duration: 250,
                    delay: 1000,
                },
                {
                    opacity: [1, 0],
                    duration: 250,
                    delay: 1750,
                },
            ],
            { targets: fakeLoadingBarEl.value! }
        );
    }

    function animateAboutMeText() {
        const aboutMeChars = aboutMeTextEl.value!.$el.querySelectorAll('span');

        // createTimeline({ delay: 1400 })
        //     .add(aboutMeChars, {
        //         opacity: [0, 1],
        //         duration: () => (Math.random() * 200) + 1000,
        //         delay: stagger(4),
        //         ease: 'inBounce'
        //     }, 0).add(aboutMeChars, {
        //         color: ['#d97706', '#FFFFFF'],
        //         duration: 1000,
        //     }, 0);
        createTimeline({ delay: 1400 })
            .add(
                aboutMeChars,
                {
                    opacity: [0, 1],
                    translateX: (_: any, idx: number) =>
                        ({
                            0: ['50px', '0px'],
                            1: ['-50px', '0px'],
                        })[idx % 4] ?? [],
                    translateY: (_: any, idx: number) =>
                        ({
                            2: ['50px', '0px'],
                            3: ['-50px', '0px'],
                        })[idx % 4] ?? [],
                    duration: 500,
                    delay: stagger(50),
                    ease: 'inOutSine',
                },
                0
            )
            .add(
                aboutMeChars,
                {
                    color: ['#77d5af', '#FFFFFF'],
                    duration: 1000,
                    delay: stagger(50),
                },
                0
            );
    }

    function startAnimations() {
        animateFakeLoadingBar();
        animateLogo();
        animateAboutMeText();
    }

    onMounted(startAnimations);
    onUpdated(startAnimations);
</script>

<template>
    <div class="grid h-full w-full grid-cols-3">
        <div
            ref="fake-loading-bar"
            class="bg-glow glow-purple fixed bottom-0 left-0 h-[100vh] max-h-full opacity-0 lg:w-8"
        ></div>

        <div>
            <AnimatedCircleOutline :delay-ms="400" :border-width-px="1">
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
                    class="whitespace-pre-wrap *:inline-block *:opacity-0"
                    split-by=" "
                >
                    {{ ABOUT_ME }}
                </AnimateableText>
            </p>
        </div>
    </div>
</template>

<style scoped></style>

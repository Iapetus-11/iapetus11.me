<script setup lang="ts">
    import { calculateYearsSince } from '~/utils/datetime';
    import { createWAAPITimeline } from '~/utils/animationHelpers';
    import { animate, createTimeline, onScroll, stagger } from 'animejs';
    // import Skill from '~/components/Skill.vue';
    // import { SKILLS } from '~/data/skills';
    import { PROJECTS } from '~/data/projects';

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
    const profilePictureContainerEl = useTemplateRef('profile-picture-container');
    const aboutMeTextEl = useTemplateRef('about-me-text');

    async function animateProfilePicture() {
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
        const aboutMeChars = aboutMeTextEl.value!.querySelectorAll('span');

        createWAAPITimeline(
            [
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
            ],
            { targets: aboutMeChars, delayMs: 600 }
        );
    }

    function startAnimations() {
        animateProfilePicture();
        animateAboutMeText();
    }

    const profilePictureContainerRect = ref<DOMRect>();
    function updateProfilePictureContainerRect() {
        if (!profilePictureContainerEl.value) return;
        profilePictureContainerRect.value = profilePictureContainerEl.value.getBoundingClientRect();
    }

    const scrollYPos = ref();
    useWindowEvent('scroll', () => scrollYPos.value = window.scrollY);

    const profileSectionAnimationDirection = ref(0);
    const isAnimatingProfileSection = ref(false);
    function animateProfileSection() {
        if (!(profilePictureEl.value && aboutMeTextEl.value && profilePictureContainerRect.value)) return;
        if (isAnimatingProfileSection.value) return;

        if (scrollYPos.value >= 10 && profileSectionAnimationDirection.value !== 1) {
            profileSectionAnimationDirection.value = 1;
            isAnimatingProfileSection.value = true;
            
            createTimeline()
                .add(profilePictureEl.value, {
                    duration: 200,
                    ease: 'outQuad',
                    position: 'fixed',
                    width: '48px',
                    height: '48px',
                    top: '12px',
                }, 0)
                .add(aboutMeTextEl.value, {
                    duration: 200,
                    ease: 'outQuad',
                    translateX: '-50vw',
                }, 0)
                .then(() => isAnimatingProfileSection.value = false);
        } else if (scrollYPos.value < 10 && profileSectionAnimationDirection.value === 1) {
            profileSectionAnimationDirection.value = -1;
            isAnimatingProfileSection.value = true;

            const top = profilePictureContainerRect.value.top;
            const left = profilePictureContainerRect.value.left;
            const width = profilePictureContainerRect.value.width;
            const height = profilePictureContainerRect.value.height;

            // TODO: Handle about me text animation

            animate(profilePictureEl.value, {
                autoplay: true,
                duration: 200,
                ease: 'inQuad',
                position: ['fixed'],
                translateX: ['50%', '0%'],
                top: `${top}px`,
                left: `${left}px`,
                width: `${width}px`,
                height: `${height}px`,
            }).then(() => isAnimatingProfileSection.value = false);
        }
    }

    watch(scrollYPos, () => {
        updateProfilePictureContainerRect();
        animateProfileSection();
    }, { immediate: true });

    onBeforeMount(() => {
        scrollYPos.value = window.scrollY;
        updateProfilePictureContainerRect();
    });

    onMounted(() => {
        animateProfileSection();
        startAnimations();
    });
</script>

<template>
    <div class="flex h-full w-full gap-36">
        <div class="relative max-w-124">
            <div ref="profile-picture-container" class="h-[100w] w-full aspect-square mb-10">
                <AnimatedCircleOutline :delay-ms="100" :border-width-px="1" :disabled="scrollYPos >= 10">
                    <img
                        ref="profile-picture"
                        src="~/assets/images/petus.png"
                        alt="Iapetus11's Profile Picture"
                        class="z-50 bg-glow glow-aqua !rounded-full opacity-0"
                        style="filter: saturate(var(--profile-picture-saturation))"
                    />
                </AnimatedCircleOutline>
            </div>

            <p ref="about-me-text">
                <AnimateableText
                    class="text-lg *:opacity-0"
                    style="overflow-wrap: break-word"
                >
                    {{ ABOUT_ME }}
                </AnimateableText>
            </p>
        </div>

        <div class="ml-auto flex w-1/2 flex-col gap-3">
            <Project
                v-for="(project, idx) in PROJECTS"
                v-bind="project"
                :key="project.name"
                class="animate-fade-in"
                :style="`animation-delay: ${idx * 50}ms`"
            />
        </div>
    </div>
</template>

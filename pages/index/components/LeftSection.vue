<script setup lang="ts">
    import { createTimeline, stagger } from 'animejs';
    import { calculateYearsSince } from '~/utils/datetime';
    import { createWAAPITimeline } from '~/utils/animationHelpers';

    const profilePictureEl = useTemplateRef('profile-picture');
    const profilePictureContainerEl = useTemplateRef('profile-picture-container');
    const aboutMeTextEl = useTemplateRef('about-me-text');

    const SCROLLY_THRESHOLD = 20;

    const ABOUT_ME = (() => {
        const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
        const programmingForYears = calculateYearsSince(new Date('8/1/2016'));

        return (
            `Hey! I'm Milo, a ${aliveForYears} year-old full-stack developer who's been programming for ` +
            `${programmingForYears}+ years and loves to learn new things!`
        );
    })();

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

    const scrollYPos = ref();
    const profilePictureContainerRect = ref<DOMRect>();

    function updateProfilePictureContainerRect() {
        if (!profilePictureContainerEl.value) return;
        profilePictureContainerRect.value = profilePictureContainerEl.value.getBoundingClientRect();
    }

    const profileSectionAnimationDirection = ref(0);
    const isAnimatingProfileSection = ref(false);
    function animateProfileSection() {
        if (!(profilePictureEl.value && aboutMeTextEl.value && profilePictureContainerRect.value))
            return;

        if (scrollYPos.value >= SCROLLY_THRESHOLD && profileSectionAnimationDirection.value !== 1) {
            profileSectionAnimationDirection.value = 1;
            isAnimatingProfileSection.value = true;

            createTimeline()
                .add(
                    profilePictureEl.value,
                    {
                        duration: 200,
                        ease: 'outQuad',
                        opacity: [1, 0],
                    },
                    0
                )
                .add(
                    aboutMeTextEl.value,
                    {
                        duration: 200,
                        ease: 'outQuad',
                        opacity: [1, 0],
                    },
                    0
                )
                .then(() => (isAnimatingProfileSection.value = false));
        } else if (
            scrollYPos.value < SCROLLY_THRESHOLD &&
            profileSectionAnimationDirection.value === 1
        ) {
            profileSectionAnimationDirection.value = -1;
            isAnimatingProfileSection.value = true;

            createTimeline()
                .add(
                    profilePictureEl.value,
                    {
                        duration: 200,
                        ease: 'inQuad',
                        opacity: [0, 1],
                    },
                    0
                )
                .add(
                    profilePictureEl.value,
                    {
                        position: 'static',
                    },
                    '<'
                )
                .add(
                    aboutMeTextEl.value,
                    {
                        duration: 200,
                        ease: 'inQuad',
                        opacity: [0, 1],
                        delay: 100,
                    },
                    0
                )
                .then(() => (isAnimatingProfileSection.value = false));
        }
    }

    watch(
        scrollYPos,
        () => {
            updateProfilePictureContainerRect();
            animateProfileSection();
        },
        { immediate: true }
    );

    useWindowEvent('scroll', () => (scrollYPos.value = window.scrollY));
    useWindowEvent('resize', () => {
        scrollYPos.value = window.scrollY;
        updateProfilePictureContainerRect();

        animateProfileSection();
    });

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
    <div class="relative max-w-124">
        <div ref="profile-picture-container" class="mb-10 aspect-square h-[55vh] mx-auto">
            <AnimatedCircleOutline
                :delay-ms="100"
                :border-width-px="1"
                :disabled="scrollYPos >= SCROLLY_THRESHOLD"
            >
                <img
                    ref="profile-picture"
                    src="~/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="bg-glow glow-aqua z-50 !rounded-full border border-white/20 opacity-0"
                    style="filter: saturate(var(--profile-picture-saturation))"
                />
            </AnimatedCircleOutline>
        </div>

        <p ref="about-me-text">
            <AnimateableText class="text-lg *:opacity-0" style="overflow-wrap: break-word">
                {{ ABOUT_ME }}
            </AnimateableText>
        </p>
    </div>
</template>

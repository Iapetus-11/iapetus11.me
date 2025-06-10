<script setup lang="ts">
    import { calculateYearsSince } from '~/utils/datetime';
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
</script>

<template>
    <div class="grid h-full w-full grid-cols-3 px-4 md:px-8 lg:px-12">
        <div id="fake-loading-bar-1" class="bg-glow fixed bottom-0 left-0 max-h-full w-4 lg:w-8"></div>

        <div>
            <AnimatedCircleOutline :delay-ms="1000">
                <img
                    id="profile-picture"
                    src="~/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="bg-glow glow-aqua mb-10 !rounded-full opacity-10"
                />
            </AnimatedCircleOutline>

            <p>{{ ABOUT_ME }}</p>
        </div>
    </div>
</template>

<style scoped>
    @keyframes profile-picture {
        0% {
            opacity: 0%;
        }
        35% {
            opacity: 50%;
        }
        40% {
            opacity: 20%;
        }
        50% {
            opacity: 50%;
        }
        100% {
            opacity: 100%;
        }
    }

    #profile-picture {
        animation: 1s linear profile-picture both;
        animation-delay: 1s;
    }

    @keyframes fake-loading-bar-1 {
        0% {
            height: 0%;
            opacity: 100%;
        }
        14% {
            opacity: 100%;
        }
        15% {
            opacity: 0%;
        }
        17% {
            opacity: 100%;
        }
        23% {
            opacity: 100%;
        }
        25% {
            opacity: 10%;
        }
        27% {
            opacity: 100%;
        }
        29% {
            opacity: 20%;
        }
        30% {
            opacity: 100%;
        }
        65% {
            opacity: 100%;
        }
        67% {
            opacity: 10%;
        }
        69% {
            opacity: 100%;
        }
        71% {
            opacity: 20%;
        }
        73% {
            opacity: 100%;
        }
        80% {
            height: 100%;
            opacity: 100%;
        }
        100% {
            opacity: 0;
        }
    }

    #fake-loading-bar-1 {
        animation: 2.5s linear fake-loading-bar-1 both;
    }
</style>

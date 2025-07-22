<script setup lang="ts">
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
    import { calculateYearsSince } from '@/utils/datetime';
    import ProjectsSection from './ProjectsSection.vue';
    import SectionNavLink from './SectionNavLink.vue';
    import ResumeSection from './ResumeSection.vue';
    import { useActiveSTTFSection } from '@/utils/sttfs';
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, useTemplateRef, watch } from 'vue';
    import { useWindowEvent } from '@/utils/events';
    import SocialButtons from './SocialButtons.vue';
    import PicturesSection from './PicturesSection.vue';

    const STTF_SECTIONS = ['pictures', 'projects', 'resume'];

    const router = useRouter();
    const route = useRoute();

    // TODO: Does this get in build data?
    const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
    const programmingForYears = calculateYearsSince(new Date('8/1/2016'));

    const activeSTTFSection = useActiveSTTFSection(STTF_SECTIONS);
    watch(activeSTTFSection, (activeSTTFSectionId) => {
        router.replace({ hash: `#${activeSTTFSectionId}` });
    });

    // I can't figure out the CSS (without hard-coding some number for padding or whatever) to get the sidebar to fill
    // the height of the screen, so here we go :/
    const stickyContainerEl = useTemplateRef('sticky-container');
    function resizeStickyContainerToFillHeight() {
        const top = stickyContainerEl.value?.getBoundingClientRect().top;
        if (!top) return;

        const height = window.innerHeight - top;

        stickyContainerEl.value.style.height = `${height}px`;
    }
    useWindowEvent('resize', resizeStickyContainerToFillHeight, { passive: true });

    const sectionsContainer = useTemplateRef('sections-container');

    onMounted(async () => {
        resizeStickyContainerToFillHeight();

        await new Promise((resolve) => setTimeout(resolve, 1));

        // For some reason sttfs don't work on page load (on chrome at least), this jumps to the
        // right section if there's a hash in the URL
        // Also no I cannot use vue-router's scrollBehavior, because that does not respect scroll margin
        const sttfId = route.hash.slice(1);
        if (STTF_SECTIONS.includes(sttfId)) {
            sectionsContainer.value!.classList.add('fade-in');
            document.getElementById(sttfId)!.scrollIntoView({ behavior: 'instant' });
        }
    });
</script>

<template>
    <DefaultLayout class="flex flex-col items-center lg:flex-row lg:gap-x-32 xl:gap-x-48">
        <!-- top-* here must match the y padding in <DefaultLayout> -->
        <div
            ref="sticky-container"
            class="fade-in flex flex-col gap-y-5 self-start pb-12 max-lg:!h-fit md:top-10 lg:sticky lg:-mb-100 lg:w-[40%] xl:top-16 2xl:top-22"
        >
            <div class="xs:max-lg:w-full flex items-center max-lg:mx-auto lg:-ml-1">
                <img
                    src="@/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="outline-primary-400/30 xs:size-16 mr-3.5 size-14 !rounded-full outline-1 outline-offset-3 md:mr-5 md:size-18 xl:size-20"
                />

                <div>
                    <h1
                        class="font-mono text-3xl font-bold whitespace-nowrap sm:text-4xl xl:text-5xl"
                    >
                        Milo<span class="text-primary-400 mx-2 xl:mx-4">/</span>Iapetus11
                    </h1>
                    <h2
                        class="text-primary-400 mt-1 text-sm font-medium whitespace-nowrap italic sm:text-base md:text-xl"
                    >
                        Full-Stack Software Engineer & Hobbyist
                    </h2>
                </div>

                <div class="xs:max-lg:grid ml-auto hidden grid-cols-2 justify-items-center gap-1">
                    <SocialButtons />
                </div>
            </div>

            <p class="max-lg:order-last md:text-lg lg:mt-5">
                I'm a {{ aliveForYears }} year-old full-stack developer who's been programming for
                {{ programmingForYears }} years and loves to learn new things!
            </p>
            <p class="[&>a]:text-link max-lg:order-last md:text-lg">
                I'm currently loving Rust, and working with Python + Vue.js for
                <a href="https://medshift.com/" target="_blank" rel="noreferrer">MedShift</a>. If
                I'm not programming, bouldering, or busy being a couch potato, you'll find me
                zooming on mountain backroads in my
                <RouterLink :to="{ name: 'miata' }">Miata</RouterLink>!
            </p>

            <div class="my-auto flex flex-col gap-3 max-lg:hidden lg:items-start">
                <SectionNavLink sttf-id="pictures" icon="icon-[hugeicons--bulb-charging]">
                    Pictures
                </SectionNavLink>
                <SectionNavLink sttf-id="projects" icon="icon-[hugeicons--test-tube-01]">
                    Projects
                </SectionNavLink>
                <SectionNavLink sttf-id="resume" icon="icon-[hugeicons--ai-content-generator-01]">
                    Experience
                </SectionNavLink>
            </div>

            <div class="xs:max-lg:hidden flex gap-3 max-lg:mx-auto max-lg:mt-1 md:gap-2 lg:mt-auto">
                <SocialButtons />
            </div>
        </div>

        <div ref="sections-container" class="flex flex-col gap-16 opacity-0 md:gap-20">
            <!-- Allow first element to be properly viewable with useScrollCardEffect -->
            <div class="h-10 max-lg:hidden"></div>

            <PicturesSection id="pictures" class="scroll-mt-0 max-lg:order-last" />
            <ProjectsSection id="projects" class="scroll-mt-100 lg:scroll-mt-[30vh]" />
            <ResumeSection id="resume" class="scroll-mt-[30vh]" />

            <!-- Get last element to appear correctly with useScrollCardEffect -->
            <div class="order-last h-32 lg:h-6"></div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import { calculateYearsSince } from '@/utils/datetime';
    import ProjectsSection from './sections/ProjectsSection.vue';
    import ResumeSection from './sections/ResumeSection.vue';
    import { useActiveSTTFSection } from '@/utils/sttfs';
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, useTemplateRef, watch } from 'vue';
    import PicturesSection from './sections/PicturesSection.vue';
    import { SITE_URL, useSeo } from '@/utils/head';
    import { useHead } from '@unhead/vue';
    import petusWebp from '@/assets/images/petus.webp?no-inline';
    import { DATE_BECAME_PROGRAMMER_NERD, DATE_BECAME_ALIVE } from '@/data/me';
    import ProfileStickyLayout from '@/components/layout/profile-sticky-layout/ProfileStickyLayout.vue';

    const STTF_SECTIONS = ['pictures', 'projects', 'resume'];

    // At least show something if they've disabled javascript
    const SECTIONS_CONTAINER_NOSCRIPT_HTML = `
    <style>
        #sections-container {
            opacity: 1 !important;
        }
    </style>
    `;

    const router = useRouter();
    const route = useRoute();

    const aliveForYears = calculateYearsSince(DATE_BECAME_ALIVE);
    const programmingForYears = calculateYearsSince(DATE_BECAME_PROGRAMMER_NERD);

    const activeSTTFSection = useActiveSTTFSection(STTF_SECTIONS);
    watch(activeSTTFSection, (activeSTTFSectionId) => {
        router.replace({ hash: activeSTTFSectionId ? `#${activeSTTFSectionId}` : '' });
    });

    const sectionsContainer = useTemplateRef('sections-container');

    onMounted(async () => {
        await new Promise((resolve) => setTimeout(resolve, 1));

        // For some reason sttfs don't work on page load (on chrome at least), this jumps to the
        // right section if there's a hash in the URL.
        // Also no I cannot use vue-router's scrollBehavior, because that does not respect scroll margin.
        const sttfId = route.hash.slice(1);
        if (STTF_SECTIONS.includes(sttfId)) {
            sectionsContainer.value!.classList.add('fade-in');
            document.getElementById(sttfId)!.scrollIntoView({ behavior: 'instant' });
        }
    });

    const description =
        `Hey! I'm Milo, a ${aliveForYears} year-old full-stack developer who's been programming for ` +
        `${programmingForYears} years and loves to learn new things!`;

    useSeo({
        title: 'Milo Weinberg / Iapetus11',
        description,
        url: SITE_URL,
    });

    const petusImageUrl = new URL(petusWebp, SITE_URL).href;
    useHead({
        script: [
            {
                type: 'application/ld+json',
                id: 'schema-org-graph',
                innerHTML: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@graph': [
                        {
                            '@id': `${SITE_URL}#identity`,
                            '@type': 'Person',
                            name: 'Milo Weinberg',
                            alternateName: 'Iapetus11',
                            description,
                            jobTitle: 'Full-Stack Software Engineer',
                            url: SITE_URL,
                            image: { '@id': `${SITE_URL}#/schema/image/1` },
                            sameAs: [
                                'https://github.com/Iapetus-11/',
                                'https://www.linkedin.com/in/milo-weinberg/',
                            ],
                        },
                        {
                            '@id': `${SITE_URL}#website`,
                            '@type': 'WebSite',
                            name: 'Milo Weinberg / Iapetus11',
                            description,
                            inLanguage: 'en',
                            url: SITE_URL,
                            publisher: { '@id': `${SITE_URL}#identity` },
                        },
                        {
                            '@id': `${SITE_URL}#webpage`,
                            '@type': ['WebPage', 'ProfilePage'],
                            name: 'Milo Weinberg / Iapetus11',
                            description,
                            url: SITE_URL,
                            about: { '@id': `${SITE_URL}#identity` },
                            isPartOf: { '@id': `${SITE_URL}#website` },
                            mainEntity: { '@id': `${SITE_URL}#identity` },
                        },
                        {
                            '@id': `${SITE_URL}#/schema/image/1`,
                            '@type': 'ImageObject',
                            inLanguage: 'en',
                            url: petusImageUrl,
                            contentUrl: petusImageUrl,
                        },
                    ],
                }),
            },
        ],
    });
</script>

<template>
    <ProfileStickyLayout>
        <noscript v-html="SECTIONS_CONTAINER_NOSCRIPT_HTML"></noscript>
        <Transition appear name="slide">
            <div
                ref="sections-container"
                id="sections-container"
                class="flex flex-col gap-16 opacity-[0.0001] md:gap-20"
            >
                <PicturesSection
                    id="pictures"
                    class="-scroll-mt-48 max-lg:order-last sm:mt-24 lg:mt-10"
                />
                <ProjectsSection
                    id="projects"
                    class="scroll-mt-200 lg:-mt-20 lg:scroll-mt-[30vh]"
                />
                <ResumeSection id="resume" class="scroll-mt-[30vh]" />

                <!-- Get last element to appear correctly with useScrollCardEffect -->
                <div class="order-last max-sm:h-32 lg:h-6"></div>
            </div>
        </Transition>
    </ProfileStickyLayout>
</template>

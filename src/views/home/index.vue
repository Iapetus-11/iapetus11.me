<script setup lang="ts">
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
    import { calculateYearsSince } from '@/utils/datetime';
    import ProjectsSection from './ProjectsSection.vue';
    import SectionNavLink from './SectionNavLink.vue';
    import ResumeSection from './ResumeSection.vue';
import { useActiveSTTFSection } from '@/utils/events';

    // TODO: Does this get in build data?
    const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
    const programmingForYears = calculateYearsSince(new Date('8/1/2016'));

    const activeSTTFSection = useActiveSTTFSection(['resume', 'project', 'skills']);
</script>

<template>
    <DefaultLayout class="flex items-start lg:gap-x-32 xl:gap-x-48 py-22">
        <div class="sticky top-22 flex w-[40%] flex-col gap-y-5">
            <div class="flex items-center">
                <img
                    src="@/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="outline-primary-400/30 mr-5 size-20 !rounded-full outline-1 outline-offset-3"
                />

                <div>
                    <h1 class="font-mono text-5xl font-bold whitespace-nowrap">
                        Milo<span class="text-primary-400 mx-4">/</span>Iapetus11
                    </h1>
                    <h2 class="text-primary-400 mt-1 text-xl font-medium whitespace-nowrap italic">
                        Full-Stack Software Engineer & Hobbyist
                    </h2>
                </div>
            </div>

            <p class="mt-5">
                I'm a {{ aliveForYears }} year-old full-stack developer who's been programming for
                {{ programmingForYears }} years and loves to learn new things!
            </p>
            <p>
                I'm currently dabbling in Rust with Villager Bot and working at MedShift on Velocity
                Enterprise + Lending.
            </p>

            <div class="mt-[12vh] flex flex-col items-start gap-3">
                <SectionNavLink sttf-id="projects" icon="icon-[hugeicons--test-tube-01]">
                    Projects
                </SectionNavLink>
                <SectionNavLink sttf-id="resume" icon="icon-[hugeicons--ai-content-generator-01]">
                    Experience
                </SectionNavLink>
                <SectionNavLink sttf-id="skills" icon="icon-[hugeicons--setting-done-01]">
                    Skills
                </SectionNavLink>
            </div>
        </div>

        <div class="flex flex-col gap-20">
            <ProjectsSection id="projects" class="scroll-mt-100" />
            <ResumeSection id="resume" class="scroll-mt-20" />

            <!-- Get last element to appear correctly with useScrollCardEffect -->
            <div class="h-[100px]"></div>
        </div>
    </DefaultLayout>
</template>

<script setup lang="ts">
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
    import { calculateYearsSince } from '@/utils/datetime';
    import ProjectsSection from './ProjectsSection.vue';

    // TODO: Does this get in build data?
    const aliveForYears = calculateYearsSince(new Date('9/1/2003'));
    const programmingForYears = calculateYearsSince(new Date('8/1/2016'));
</script>

<template>
    <DefaultLayout class="flex items-start gap-x-48 py-22">
        <div class="sticky top-22 flex w-[40%] flex-col gap-y-5">
            <div class="flex items-center">
                <img
                    src="@/assets/images/petus.png"
                    alt="Iapetus11's Profile Picture"
                    class="outline-primary-400/30 mr-5 size-20 !rounded-full outline-1 outline-offset-3"
                />

                <div>
                    <h1 class="font-mono text-5xl font-bold">
                        Milo<span class="text-primary-400 mx-4">/</span>Iapetus11
                    </h1>
                    <h2 class="text-primary-400 mt-1 text-xl font-medium italic">
                        Full-Stack Software Engineer & Hobbyist
                    </h2>
                </div>
            </div>

            <p>
                I'm a {{ aliveForYears }} year-old full-stack developer who's been programming for
                {{ programmingForYears }} years and loves to learn new things!
            </p>
            <p>
                I'm currently dabbling in Rust with Villager Bot and working at MedShift on Velocity
                Enterprise + Lending.
            </p>

            <div class="mt-2 flex gap-4">
                <button
                    type="button"
                    class="border-primary-400 rounded-2xl border-2 p-2.5 font-medium tracking-wide"
                >
                    Projects
                </button>
                <button
                    type="button"
                    class="border-primary-400 rounded-2xl border-2 p-2.5 font-medium tracking-wide"
                >
                    Resume / Timeline
                </button>
                <button
                    type="button"
                    class="border-primary-400 rounded-2xl border-2 p-2.5 font-medium tracking-wide"
                >
                    Skills
                </button>
            </div>
        </div>

        <div>
            <ProjectsSection />
        </div>
    </DefaultLayout>
</template>

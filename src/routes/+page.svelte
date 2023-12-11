<script lang="ts">
    import { aboutMe, skills } from '$lib/data/me.js';
    import petusPng from '$lib/images/petus.png';
    import SkillsDisplay from './SkillsDisplay.svelte';
    import Navigation from '$lib/components/Navigation.svelte';
    import MobileNavigation from './MobileNavigation.svelte';
</script>

<div
    class="flex flex-col sm:flex-row min-h-screen items-center p-3 md:px-12 lg:px-34 xl:px-44 gap-3 md:gap-12
	       lg:gap-24 xl:gap-40"
>
    <div class="flex flex-col space-y-5 sm:w-2/5 items-center">
        <MobileNavigation>
            <img
                src={petusPng}
                alt="Iapetus11's Lightbulb"
                class="fin fin-0 shadow-md rounded-full w-full max-w-md"
            />
        </MobileNavigation>

        <div class="flex flex-col space-y-2 font-semibold">
            <h3 class="text-3xl text-aqua-normal text-center fin fin-1">
                Milo <span class="text-white">/</span> Iapetus11
            </h3>

            <p class="text-lg text-center sm:text-left fin fin-2">{aboutMe}</p>
        </div>
    </div>

    <div class="flex flex-col sm:w-3/5 gap-6">
        <Navigation class="hidden sm:flex" />
        <SkillsDisplay title="Programming Languages" skills={skills.languages} />
        <SkillsDisplay title="Technologies / Tools" skills={skills.other} />
    </div>
</div>

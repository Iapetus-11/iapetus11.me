<script lang="ts">
    import { projects } from '$lib/data/me.ts';
    import DesignatedPage from '$lib/components/DesignatedPage.svelte';

    import ProjectCard from './ProjectCard.svelte';
</script>

<DesignatedPage title="Projects">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 lg:gap-12 xl:mx-6">
        {#each projects as project, idx}
            <ProjectCard {...project} {idx} />
        {/each}
    </div>
</DesignatedPage>

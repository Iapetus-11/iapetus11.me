<script lang="ts">
    import DesignatedPage from '$lib/components/DesignatedPage.svelte';

    import Recommendation from './Recommendation.svelte';

    export let data;
</script>

<DesignatedPage title="Friends">
    <p class="fin fin-0 md:mx-12 lg:mx-32 italic text-center text-lg md:-mt-8 mb-12">
        Here are friends who I have worked with, mentored, or otherwise significantly helped in the
        realm of technology. This page is automatically generated from <a
            href="https://github.com/Iapetus-11/recommendations"
            target="_blank">this GitHub repository</a
        >.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-12 xl:mx-6">
        {#each data.recommendations as recommendation, idx}
            <Recommendation
                {...recommendation}
                {idx}
                class={recommendation.content.length > 256 ||
                data.recommendations[idx - 1]?.content?.length > 256 ||
                data.recommendations[idx + 1] === undefined
                    ? 'md:col-span-2'
                    : 'col-span-1'}
            />
        {/each}
    </div>
</DesignatedPage>

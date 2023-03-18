<script lang="ts">
    import DesignatedPage from '$lib/components/DesignatedPage.svelte';
    import Recommendation from './Recommendation.svelte';

    export let data;

    const priority = ['jkriste', 'Kevin Thomas', 'clvrk', 'Infernum1'];

    function cmpRecommendations(a: Recommendation, b: Recommendation): number {
        let pA = priority.indexOf(a.name);
        let pB = priority.indexOf(b.name);

        pA = pA === -1 ? 10000 : pA;
        pB = pB === -1 ? 10000 : pB;

        if (pA < pB) return -1;

        if (pA > pB) return 1;

        return 0;
    }
</script>

<DesignatedPage>
    <p class="fin fin-0 md:mx-12 lg:mx-32 italic text-center text-lg md:-mt-8 mb-12">
        Here are friends who I have worked with, mentored, or otherwise significantly helped in the
        realm of technology. This page is automatically generated from <a
            href="https://github.com/Iapetus-11/recommendations"
            target="_blank">this GitHub repository</a
        >.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 lg:gap-12 xl:mx-6">
        {#each data.recommendations.sort(cmpRecommendations) as recommendation, idx}
            <Recommendation
                {...recommendation}
                {idx}
                class={recommendation.content.length > 200 ||
                data.recommendations[idx - 1]?.content?.length > 200 ||
                !data.recommendations[idx + 1]
                    ? 'md:col-span-2'
                    : 'col-span-1'}
            />
        {/each}
    </div>
</DesignatedPage>

<script lang="ts">
    import SkillCard from './SkillCard.svelte';

    export let title: string;
    export let skills: Array<{ name: string; icon: object; idx: number }>;
</script>

<div class="flex flex-col items-center sm:items-start gap-2">
    <h4 class="fin fin-1 text-2xl text-aqua-normal text-center sm:ml-2 sm:text-left font-semibold">
        {title}
    </h4>

    <div
        class="flex flex-row flex-wrap items-center justify-center sm:items-start sm:justify-start sm:text-lg gap-2
               mx-1 sm:mx-0"
    >
        {#each skills as skill, idx}
            <SkillCard {...skill} {idx} />
        {/each}
    </div>
</div>

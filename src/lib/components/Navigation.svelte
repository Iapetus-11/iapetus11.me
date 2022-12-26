<script lang="ts">
    import IconNavButton from './IconNavButton.svelte';
    import NavButton from './NavButton.svelte';
    import { externalPages, pages } from '$lib/data/nav.js';
    import { page } from '$app/stores';

    export let fill: boolean = false;
</script>

<div class="flex p-4 items-center {$$props.class} {fill ? 'justify-between' : 'gap-6'}">
    <div class="flex gap-4">
        {#each externalPages as externalPage, idx}
            <IconNavButton {...externalPage} {idx} />
        {/each}
    </div>

    <div class="flex gap-4">
        {#each pages.filter((p) => p.href !== $page.route.id) as page, idx}
            <NavButton {...page} idx={idx + externalPages.length} />
        {/each}
    </div>
</div>

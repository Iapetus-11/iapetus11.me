<script lang="ts">
    import IconNavButton from '$lib/components/IconNavButton.svelte';
    import NavButton from '$lib/components/NavButton.svelte';
    import { page } from '$app/stores';
    import { externalPages, pages } from '$lib/data/nav.js';
</script>

<div class="grid grid-cols-7 sm:flex gap-6 p-4 items-center {$$props.class}">
    <div class="grid grid-cols-2 mx-auto sm:hidden col-span-2 gap-4">
        {#each externalPages as externalPage, idx}
            <IconNavButton {...externalPage} {idx} />
        {/each}
    </div>

    <div class="col-span-3">
        <slot />
    </div>

    <div class="flex flex-col mx-auto sm:hidden w-20 col-span-2 gap-4">
        {#each pages.filter((p) => p.href !== $page.route.id) as page, idx}
            <NavButton {...page} {idx} />
        {/each}
    </div>
</div>

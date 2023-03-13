<script lang="ts">
    import Navigation from './Navigation.svelte';
    import { page } from '$app/stores';
</script>

<div class="flex flex-col my-4 mx-3 md:my-12 md:w-11/12 xl:w-4/5 md:mx-auto">
    <div
        class="flex flex-col-reverse sm:flex-row justify-between w-full items-center sm:items-start mb-6 lg:mb-12"
    >
        <h1 class="fin fin-1 text-6xl text-left font-semibold self-center">
            {$page.data.meta.name}
        </h1>
        <Navigation class="sm:ml-auto" />
    </div>

    <slot />
</div>

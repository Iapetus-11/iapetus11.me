<script lang="ts">
    import Fa from 'svelte-fa/src/fa.svelte';

    export let name: string;
    export let icon: object | undefined = undefined;
    export let customIcon: object | undefined = undefined;
    export let idx: number;
</script>

<div
    class={`fin py-2 px-2.5 bg-dark-super rounded-md flex flex-row items-center space-x-1`}
    style="animation-delay:{0.2 + idx * 0.05}s;"
>
    {#if icon}
        <Fa class="text-aqua-normal" {icon} fw />
    {:else}
        <img src={customIcon} alt={name} class="max-h-5 w-5 mx-0.5" />
    {/if}
    <span>{name}</span>
</div>

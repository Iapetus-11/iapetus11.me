<script lang="ts">
    import SvelteMarkdown from 'svelte-markdown';

    export let name: string;
    export let username: string;
    export let url: string;
    export let content: string;
    export let idx: number;
</script>

<a
    class="fin p-3 md:p-6 lg:p-8 bg-dark-super hover:bg-opacity-80 transition rounded-xl !text-white {$$props.class}"
    style="animation-delay:{0.2 + idx * 0.05}s;"
    href={url}
    target="_blank"
    rel="noreferrer"
>
    <img
        class="w-[5rem] rounded-full float-left mr-3 mt-1"
        src={`https://avatars.githubusercontent.com/${username}`}
        alt={`${name}'s avatar`}
    />

    <span class="text-aqua-normal text-3xl">{name}</span>
    <SvelteMarkdown source={content} />
</a>

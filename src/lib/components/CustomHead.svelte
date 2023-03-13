<script lang="ts">
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{$page.data.meta.title}</title>
    <link rel="icon" type="image/png" href="/favicon.png" />

    <meta name="title" content={$page.data.meta.title} />
    <meta
        name="keywords"
        content={[
            'iapetus11',
            'iapetus-11',
            'milo',
            'weinberg',
            'milo weinberg',
            ...$page.data.meta.keywords,
        ].join(', ')}
    />
    {#if $page.data.meta.description}
        <meta name="description" content={$page.data.meta.description} />
    {/if}

    <!-- meta for opengraph embeds (facebook, discord, etc...) -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={$page.data.meta.embedTitle || $page.data.meta.title} />
    {#if $page.data.meta.description}
        <meta property="og:description" content={$page.data.meta.description} />
    {/if}
    {#if $page.data.meta.url}<meta property="og:url" content={$page.data.meta.url} />{/if}
    {#if $page.data.meta.imageUrl}
        <meta property="og:image" content={$page.data.meta.imageUrl} />
    {/if}

    <!-- meta for embeds in twitter -->
    <meta
        name="twitter:card"
        content={$page.data.meta.largeImage ? 'summary_large_image' : 'summary'}
    />
    <meta name="twitter:title" content={$page.data.meta.embedTitle || $page.data.meta.title} />
    {#if $page.data.meta.description}
        <meta name="twitter:description" content={$page.data.meta.description} />
    {/if}
    {#if $page.data.meta.url}<meta name="twitter:url" content={$page.data.meta.url} />{/if}
    {#if $page.data.meta.imageUrl}
        <meta name="twitter:image" content={$page.data.meta.imageUrl} />
    {/if}

    {#if $page.data.meta.embedColor}
        <meta name="theme-color" content={$page.data.meta.embedColor} />
    {/if}
</svelte:head>

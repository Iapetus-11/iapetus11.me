<script lang="ts">
    export let title: string = 'Milo Weinberg';
    export let description: string =
        "Hey! I'm Milo, a 19 year-old full-stack developer who's been programming " +
        'for 6+ years and loves to learn new things!';
</script>

<svelte:head>
    <title>{title}</title>
    <link rel="icon" type="image/png" href="/favicon.png" />

    <meta name="title" content={title} />
    <meta name="keywords" content="iapetus11, iapetus-11, milo, weinberg, milo weinberg" />
    <meta name="description" content={description} />

    <!-- meta for embeds in discord and facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://iapetus11.me/" />
    <meta property="og:image" content="https://iapetus11.me/static/images/petus-circle.png" />

    <!-- meta for embeds in twitter -->
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content="https://iapetus11.me/" />
    <meta name="twitter:image" content="https://iapetus11.me/static/images/petus-circle.png" />
</svelte:head>

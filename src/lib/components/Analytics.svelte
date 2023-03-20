<script lang='ts'>
    import { PUBLIC_UNAMI_ID } from '$env/static/public';
</script>

<svelte:head>
    {@html `<script async defer data-website-id="${PUBLIC_UNAMI_ID}" src="https://analytics.umami.is/script.js"></script>`}
</svelte:head>

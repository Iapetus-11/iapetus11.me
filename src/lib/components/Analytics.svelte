<script lang='ts'>
    import { PUBLIC_UNAMI_ID } from '$env/static/public';
</script>

<svelte:head>
    {@html `<script async defer src='https://analytics.umami.is/script.js' data-website-id='${PUBLIC_UNAMI_ID}' />`}
</svelte:head>

<script lang="ts">
    import {PUBLIC_GTAG_ID} from '$env/static/public';
    import {page} from '$app/stores'

    $: {
        if (typeof gtag !== 'undefined') {
            gtag('config', PUBLIC_GTAG_ID, {
                page_title: document.title,
                page_path: $page.url.pathname,
            });
        }
    }
</script>

<svelte:head>
    {@html `<script async src="https://www.googletagmanager.com/gtag/js?id=${PUBLIC_GTAG_ID}" />` }
    {@html `<script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', '${PUBLIC_GTAG_ID}');
    </script>`}
</svelte:head>

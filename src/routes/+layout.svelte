<script lang="ts">
    import '../app.css';
    import Analytics from '$lib/components/Analytics.svelte';
    import CustomHead from '$lib/components/CustomHead.svelte';
</script>

<CustomHead />

<main class="text-white">
    <Analytics />
    <slot />
</main>

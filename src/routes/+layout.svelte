<script lang="ts">
    import '../app.css';
    import Analytics from '$lib/components/Analytics.svelte';
</script>

<main class="text-white">
    <Analytics />
    <slot />
</main>

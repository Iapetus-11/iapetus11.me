<script setup lang="ts">
    import Link from '@/components/Link.vue';
</script>

<style scoped>
    @reference '@/assets/main.css';

    .link {
        @apply text-link tracking-wide underline-offset-2;
    }

    .link-active {
        @apply decoration-primary-300;
    }
</style>

<template>
    <div class="flex gap-2 font-mono text-lg">
        <Link
            :to="$route.name === 'home' ? $route : { name: 'home' }"
            class="link"
            :class="{ 'link-active': $route.name === 'home' }"
        >
            Home
        </Link>
        |
        <Link
            :to="{ name: 'blog' }"
            class="link"
            :class="{ 'link-active': $route.name === 'blog' }"
        >
            Blog
        </Link>
    </div>
</template>

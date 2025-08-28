<script setup lang="ts">
    import NavLink from './NavLink.vue';
</script>

<template>
    <div class="flex gap-3">
        <NavLink :to="{ name: 'links' }" icon="icon-[hugeicons--link-03]"> Link Dump </NavLink>
    </div>
</template>

<script setup lang="ts">
    import NavLink from './NavLink.vue';
</script>

<template>
    <div class="flex gap-3">
        <NavLink :to="{ name: 'links' }" icon="icon-[hugeicons--link-03]"> Link Dump </NavLink>
        <NavLink :to="{ name: 'miata' }" icon="icon-[hugeicons--car-05]"> Miata </NavLink>
    </div>
</template>

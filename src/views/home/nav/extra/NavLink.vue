<script setup lang="ts">
    import Link from '@/components/Link.vue';
</script>

<template>
    <Link
        :to="{ name: 'links' }"
        class="group outlined-actionable flex items-center justify-between overflow-clip rounded-xl p-2 px-2.5 text-lg font-medium 2xl:text-xl"
    >
        <slot />

        <div class="flex items-center text-gray-300 transition-colors group-hover:text-white">
            <slot name="icon" />
        </div>
    </Link>
</template>

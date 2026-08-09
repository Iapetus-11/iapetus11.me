<script setup lang="ts">
    import Link from '@/components/Link.vue';

    interface Props {
        title: string;
        description: string;
        routeName: string;
    }

    defineProps<Props>();
</script>

<template>
    <Link :to="{ name: routeName }" class="outlined-actionable flex flex-col rounded-xl p-4 lg:p-5">
        <div
            class="mb-1 flex items-center font-mono text-xl font-semibold whitespace-nowrap text-white md:text-2xl"
        >
            <h3>{{ title }}</h3>

            <span
                class="icon-[hugeicons--link-square-02] ml-2.5 scale-0 text-purple-300 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-100"
            ></span>
        </div>

        <p>{{ description }}</p>
    </Link>
</template>

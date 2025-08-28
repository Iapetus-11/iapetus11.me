<script setup lang="ts">
    defineProps<{
        title: string;
    }>();
</script>

<template>
    <div class="flex justify-between gap-x-6 gap-y-4">
        <h1 class="font-mono text-4xl font-bold md:text-5xl">{{ title }}</h1>

        <RouterLink
            :to="{ name: 'home' }"
            class="group outlined-actionable mb-auto flex h-fit w-fit items-center rounded-xl p-2 whitespace-nowrap sm:my-auto md:p-3"
        >
            <span
                class="icon-[hugeicons--arrow-left-01] mr-0.5 -ml-1.5 text-2xl transition-[margin] group-hover:mr-1"
            ></span>
            Go Back
        </RouterLink>
    </div>
</template>

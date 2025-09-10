<script setup lang="ts">
    import BaseLayout from './BaseLayout.vue';

    interface Props {
        title: string;
        extraWidth?: boolean;
    }

    defineProps<Props>();
</script>

<template>
    <BaseLayout :extra-width class="flex flex-col gap-6 !py-4 sm:gap-8 sm:!py-6 md:!py-10 lg:gap-12">
        <header class="w-full">
            <div class="flex items-center justify-between">
                <h1 class="mr-6 text-left font-mono text-4xl font-bold md:text-5xl">{{ title }}</h1>

                <RouterLink :to="{ name: 'home' }" class="group shrink-0">
                    <img
                        src="@/assets/images/petus.webp"
                        class="outline-primary-400/30 group-hover:outline-primary-400/70 xs:size-14 size-12 rounded-full outline-1 outline-offset-3 transition-[colors,scale] group-hover:scale-105 sm:size-14"
                        alt="Iapetus-11's profile picture"
                    />
                    <span class="sr-only">Go Home</span>
                </RouterLink>
            </div>

            <slot name="subheading" />
        </header>

        <slot />
    </BaseLayout>
</template>

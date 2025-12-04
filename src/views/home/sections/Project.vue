<script setup lang="ts">
    import type { ProjectDefinition } from '@/data/projects';
    import Link from '@/components/Link.vue';
    import BadgeList from './BadgeList.vue';

    defineProps<
        ProjectDefinition & {
            imgLoading: 'eager' | 'lazy';
        }
    >();
</script>

<template>
    <Link
        :to="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="group outlined-actionable relative flex min-h-43 rounded-xl p-4 lg:p-5"
    >
        <div class="self-center sm:max-w-[calc(100%-10rem)]">
            <div
                class="mb-1 flex items-center font-mono text-xl font-semibold whitespace-nowrap text-white md:text-2xl"
            >
                <h3>{{ name }}</h3>

                <span
                    class="icon-[hugeicons--link-square-02] ml-2.5 scale-0 text-purple-300 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-100"
                ></span>
            </div>

            <p class="text-white">
                <!-- Make room for the project picture on mobile -->
                <span class="float-right block h-9 w-16 sm:hidden"></span>

                {{ description }}
            </p>

            <BadgeList :badges="points" class="mt-3" />
        </div>

        <div
            class="absolute top-3.5 right-3.5 flex aspect-square items-center justify-end max-sm:h-14 sm:top-1/2 sm:right-5 sm:h-[calc(100%-2rem)] sm:-translate-y-1/2"
        >
            <img
                :src="image"
                :alt="name"
                :loading="imgLoading"
                :fetchpriority="imgLoading === 'eager' ? 'high' : 'auto'"
                class="max-h-[128px] rounded-2xl sm:rounded-3xl"
            />
        </div>
    </Link>
</template>

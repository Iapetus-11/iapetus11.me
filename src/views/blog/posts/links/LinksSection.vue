<script setup lang="ts">
    import type { LinkDefinition } from '@/data/links';

    interface Props {
        title: string;
        links: LinkDefinition[];
    }

    defineProps<Props>();
</script>

<template>
    <div>
        <h2 class="mb-4 font-mono text-2xl font-bold">{{ title }}</h2>

        <dl class="flex flex-col gap-3">
            <div v-for="link in links" :key="link.name" class="flex flex-col gap-0.5">
                <dt class="text-link group flex w-min items-center text-xl font-medium">
                    <a :href="link.link" target="_blank" class="whitespace-nowrap">{{
                        link.name
                    }}</a>

                    <span
                        class="icon-[hugeicons--link-square-02] text-primary-300 -mb-0.5 ml-1 scale-0 opacity-0 transition-[opacity,scale] group-hover:scale-100 group-hover:opacity-100"
                    ></span>
                </dt>
                <dd>{{ link.description }}</dd>
            </div>
        </dl>
    </div>
</template>

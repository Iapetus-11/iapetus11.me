<script setup lang="ts">
    import type { ReferralDefinition } from '~/pages/referrals/referrals';

    const props = defineProps<ReferralDefinition>();

    function openSelf() {
        window.open(props.link, '_blank', 'noreferrer');
    }
</script>

<template>
    <div
        class="flex cursor-pointer rounded-xl bg-dark-super p-6 text-white transition hover:bg-opacity-80 lg:p-8"
        role="link"
        @click="openSelf"
    >
        <div class="my-auto w-full">
            <NuxtImg
                class="float-left mr-3 mt-1 h-20 w-20 rounded-full"
                :src="`https://avatars.githubusercontent.com/${username}`"
                :alt="`${name}'s avatar`"
            />

            <h3 class="block py-1 text-2xl font-semibold text-aqua-normal sm:text-3xl">{{ name }}</h3>
            <div>
                <Markdown :content="content" class="text-white" />
            </div>
        </div>
    </div>
</template>

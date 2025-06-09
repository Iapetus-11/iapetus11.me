<script setup lang="ts">
    import type { ReferralDefinition } from '~/pages/referrals/referrals';

    const props = defineProps<ReferralDefinition>();

    function openSelf() {
        window.open(props.link, '_blank', 'noreferrer');
    }
</script>

<template>
    <div
        class="bg-dark-super hover:bg-opacity-80 flex cursor-pointer rounded-xl p-6 text-white transition lg:p-8"
        role="link"
        @click="openSelf"
    >
        <div class="my-auto w-full">
            <img
                class="float-left mt-1 mr-3 h-20 w-20 rounded-full"
                :src="`https://avatars.githubusercontent.com/${username}`"
                :alt="`${name}'s avatar`"
            />

            <h3 class="text-aqua-normal block py-1 text-2xl font-semibold sm:text-3xl">
                {{ name }}
            </h3>
            <div>
                <Markdown :content="content" class="text-white" />
            </div>
        </div>
    </div>
</template>

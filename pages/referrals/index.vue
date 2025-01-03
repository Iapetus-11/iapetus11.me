<script setup lang="ts">
    import { parseReferrals, sortReferrals } from '~/pages/referrals/referrals';
    import Referral from '~/components/Referral.vue';

    definePageMeta({
        title: 'Referrals',
    });

    const { data: referrals } = await useFetch(
        'https://raw.githubusercontent.com/Iapetus-11/referrals/main/README.md',
        {
            transform(data: string) {
                return sortReferrals(parseReferrals(data));
            },
        }
    );
</script>

<template>
    <div
        v-if="referrals !== null"
        class="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2 lg:max-xl:-mx-10"
    >
        <Referral
            v-for="(referral, idx) in referrals"
            :key="referral.name"
            v-bind="referral"
            class="animate-fade-in"
            :class="{
                'md:!col-span-2':
                    referral.content.length > 200 ||
                    referrals[idx - 1]?.content?.length > 200 ||
                    !referrals[idx + 1],
            }"
            :style="`animation-delay: ${idx * 75}ms`"
        />
    </div>
</template>

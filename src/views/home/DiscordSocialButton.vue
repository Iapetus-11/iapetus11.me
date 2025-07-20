<script setup lang="ts">
    import { ref } from 'vue';
    import SocialButton from './SocialButton.vue';

    const showCopiedPopup = ref(false);

    let popupHideTimeout: number | null = null;
    function copyUsername() {
        if (popupHideTimeout !== null) clearTimeout(popupHideTimeout);

        navigator.clipboard.writeText('iapetus11');

        showCopiedPopup.value = true;
        popupHideTimeout = setTimeout(() => (showCopiedPopup.value = false), 1000);
    }
</script>

<template>
    <div class="relative">
        <SocialButton icon="icon-[fa6-brands--discord]" @click="copyUsername" />

        <Transition name="scale" mode="out-in">
            <div
                v-if="showCopiedPopup"
                class="absolute bottom-12.5 left-1/2 -translate-x-1/2 rounded-xl bg-purple-400/50 px-2 py-1.5 whitespace-nowrap text-gray-100"
            >
                username copied!
            </div>
        </Transition>
    </div>
</template>

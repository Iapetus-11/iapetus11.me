<script setup lang="ts">
    import { ref } from 'vue';
    import SocialButton from './SocialButton.vue';

    const showCopiedPopup = ref(false);

    function copyUsername() {
        navigator.clipboard.writeText('iapetus11');

        showCopiedPopup.value = true;
        setTimeout(() => showCopiedPopup.value = false, 1000);
    }
</script>

<template>
    <div>
        <SocialButton icon="icon-[fa6-brands--discord]" @click="copyUsername" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';

    const imageReady = ref(false);
</script>

<!--
    Safari (and some other browsers like Ladybird) do not support fixed gradient backgrounds on the <body> element
    well, the recommended fix is to just position a div as the background. This solution avoids flickering and other
    glitchy undesired behavior.
-->
<template>
    <div
        class="fixed top-0 left-0 -z-50 h-screen w-screen bg-gradient-to-bl from-[#15224F] via-[#040917] to-[#14204A]"
    >
        <img
            src="@/assets/images/background.webp"
            class="h-screen w-screen object-cover opacity-0 transition-all duration-750"
            :class="{ 'opacity-5': imageReady }"
            @load="imageReady = true"
        />
    </div>
</template>

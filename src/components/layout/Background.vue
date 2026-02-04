<script setup lang="ts">
    // Show the background automatically if javascript is disabled
    const BACKGROUND_NOSCRIPT_HTML = `
    <style>
        #background-image {
            opacity: 5% !important;
        }
    </style>
    `;
</script>

<!--
    Safari (and some other browsers like Ladybird) do not support fixed gradient backgrounds on the <body> element
    well, the recommended fix is to just position a div as the background. This solution avoids flickering and other
    glitchy undesired behavior.
-->
<template>
    <div
        class="fixed top-0 left-0 -z-50 h-screen w-screen bg-linear-to-bl from-[#15224F] via-[#040917] to-[#14204A]"
    >
        <noscript v-html="BACKGROUND_NOSCRIPT_HTML"></noscript>
        <img
            id="background-image"
            src="@/assets/images/background.webp"
            class="h-screen w-screen object-cover opacity-[0.0001] transition-opacity duration-750"
            fetchpriority="low"
            onload="event.target.classList.add('!opacity-[6%]', 'md:opacity-5')"
        />
    </div>
</template>

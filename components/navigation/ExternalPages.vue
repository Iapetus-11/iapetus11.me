<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>

<script setup lang="ts">
    import { faDiscord, faGithub, faLinkedin, type IconDefinition } from '@fortawesome/free-brands-svg-icons';
    import { faDonate } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const DISCORD_USERNAME = 'iapetus11';

    defineProps<{
        animationDelay?: number;
    }>();
    
    function showAndCopyDiscordUsername() {
        navigator.clipboard.writeText(DISCORD_USERNAME);
        setTimeout(() => discordUsernameModalOpen.value = false, 1000);
    }

    const EXTERNAL_PAGES = [
        { href: 'https://github.com/Iapetus-11', icon: faGithub },
        { href: 'https://www.linkedin.com/in/milo-weinberg', icon: faLinkedin },
        { action: () => {}, icon: faDiscord },
        { href: 'https://www.venmo.com/u/Iapetus11', icon: faDonate },
    ] as const satisfies (({ action: () => void } | { href: string }) & { icon: IconDefinition })[];
</script>

<template>
    <NuxtLink
        v-for="(page, idx) in EXTERNAL_PAGES"
        :key="page.href"
        :href="page.href"
        class="animate-fade-in cursor-pointer text-2xl text-white transition-all hover:text-aqua-normal"
        :class="$attrs.class"
        :style="`animation-delay: ${idx * 75 + (animationDelay ?? 0)}ms`"
        target="_blank"
        rel="noreferrer"
    >
        <FontAwesomeIcon :icon="page.icon" :href="page.href" />
    </NuxtLink>

    <div>

    </div>
</template>

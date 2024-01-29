<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>

<script setup lang="ts">
    import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faDonate } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const EXTERNAL_PAGES = [
        { href: 'https://github.com/Iapetus-11', icon: faGithub },
        { href: 'https://www.linkedin.com/in/milo-weinberg', icon: faLinkedin },
        { href: 'https://dsc.bio/iapetus11', icon: faDiscord },
        { href: 'https://www.venmo.com/u/Iapetus11', icon: faDonate },
    ] as const;
</script>

<template>
    <NuxtLink
        v-for="page in EXTERNAL_PAGES"
        :key="page.href"
        class="cursor-pointer text-2xl text-white transition-all hover:text-aqua-normal"
        :class="$attrs.class"
    >
        <FontAwesomeIcon :icon="page.icon" :href="page.href" />
    </NuxtLink>
</template>

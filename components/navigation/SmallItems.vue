<script lang="ts">
    export default {
        inheritAttrs: false,
    };
</script>

<script setup lang="ts">
    import {
        faDiscord,
        faGithub,
        faLinkedin,
        type IconDefinition,
    } from '@fortawesome/free-brands-svg-icons';
    import { faDonate } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    const DISCORD_USERNAME = 'iapetus11';

    const SMALL_PAGES = [
        { key: 'github', href: 'https://github.com/Iapetus-11', icon: faGithub },
        { key: 'linkedin', href: 'https://www.linkedin.com/in/milo-weinberg', icon: faLinkedin },
        { key: 'discord', action: showAndCopyDiscordUsername, icon: faDiscord },
        { key: 'venmo', href: 'https://www.venmo.com/u/Iapetus11', icon: faDonate },
    ] as const satisfies (({ action: () => void } | { href: string }) & {
        key: string;
        icon: IconDefinition;
    })[];

    const attrs = useAttrs();

    defineProps<{
        animationDelay?: number;
    }>();

    const discordUsernameCopyPop = reactive<{
        open: boolean;
        timeout: NodeJS.Timeout | string | number | null;
    }>({ open: false, timeout: null });
    function showAndCopyDiscordUsername() {
        navigator.clipboard.writeText(DISCORD_USERNAME);

        discordUsernameCopyPop.open = true;

        if (discordUsernameCopyPop.timeout) {
            clearTimeout(discordUsernameCopyPop.timeout);
        }

        discordUsernameCopyPop.timeout = setTimeout(() => {
            discordUsernameCopyPop.open = false;
        }, 1000);
    }

    const smallPageClasses = computed(() =>
        [
            'animate-fade-in cursor-pointer text-2xl text-white transition-all hover:text-aqua-normal',
            attrs.class,
        ]
            .filter((c) => c)
            .join(' ')
    );
</script>

<template>
    <template v-for="(item, idx) in SMALL_PAGES">
        <NuxtLink
            v-if="'href' in item"
            :key="`link-${item.key}`"
            :href="item.href"
            :class="smallPageClasses"
            :style="`animation-delay: ${idx * 75 + (animationDelay ?? 0)}ms`"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon :icon="item.icon" />
        </NuxtLink>
        <button
            v-else
            :key="`action-${item.key}`"
            type="button"
            class="relative"
            :class="smallPageClasses"
            :style="`animation-delay: ${idx * 75 + (animationDelay ?? 0)}ms`"
            @click="item.action"
        >
            <FontAwesomeIcon :icon="item.icon" />

            <Transition name="fade" mode="out-in">
                <div
                    v-if="item.key === 'discord' && discordUsernameCopyPop.open"
                    class="pointer-events-none fixed right-1/2 z-50 translate-x-[85%] whitespace-nowrap rounded-lg border border-white bg-dark-dark p-2 text-xs text-white shadow max-sm:top-10 sm:bottom-10 sm:translate-x-[40%]"
                >
                    Copied <span class="font-mono">{{ DISCORD_USERNAME }}</span> to clipboard!
                </div>
            </Transition>
        </button>
    </template>
</template>

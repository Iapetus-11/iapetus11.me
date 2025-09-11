<script setup lang="ts">
    import { computed, useTemplateRef, watch } from 'vue';
    import { ModId, useModDisclosureState } from './modDisclosureState';

    interface Props {
        title: string;
        modId: ModId;
    }

    const props = defineProps<Props>();

    const openMod = useModDisclosureState();
    const isOpen = computed(() => openMod.value === props.modId);

    const ICON_ANIMATION = [
        { transform: 'rotate(0turn)', scale: 1 },
        { scale: 1.1 },
        { transform: 'rotate(1.25turn)', scale: 1 },
    ];
    const ICON_ANIMATION_OPTIONS: KeyframeAnimationOptions = {
        duration: 300,
        fill: 'both',
    };

    const iconEl = useTemplateRef('icon');

    watch(isOpen, (isOpen) => {
        if (!iconEl.value) return;

        if (isOpen) {
            iconEl.value.animate(ICON_ANIMATION, { ...ICON_ANIMATION_OPTIONS, easing: 'ease-out' });
        } else {
            iconEl.value.animate(ICON_ANIMATION, {
                ...ICON_ANIMATION_OPTIONS,
                direction: 'reverse',
                easing: 'ease-in',
            });
        }
    });

    function toggleOpen() {
        if (isOpen.value) {
            openMod.value = null;
        } else {
            openMod.value = props.modId;
        }
    }
</script>

<template>
    <div>
        <button
            type="button"
            @click="toggleOpen"
            class="flex cursor-pointer items-center transition-colors hover:text-purple-200"
        >
            <span
                ref="icon"
                class="icon-[hugeicons--arrow-right-01] mr-1 -ml-[0.5em] text-2xl"
            ></span>

            <h3 class="text-left font-mono text-xl font-semibold">
                {{ title }}
            </h3>
        </button>

        <div
            class="grid grid-rows-[0fr] opacity-50 transition-[grid-template-rows,opacity] duration-300 ease-in-out"
            :class="{ 'grid-rows-[1fr] opacity-100': isOpen }"
        >
            <div class="w-full space-y-2.5 overflow-hidden">
                <div>
                    <!-- easiest way to add some space between the title and the content that is only there when the disclosure is open -->
                </div>
                <slot />
            </div>
        </div>
    </div>
</template>

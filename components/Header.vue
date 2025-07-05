<script setup lang="ts">
    const PROFILE_PIC_SCROLLY_THRESHOLD = 20;

    const route = useRoute();

    const windowScroll = useWindowScroll();

    const headerEl = useTemplateRef('header');
    const headerBottomEl = useTemplateRef('header-line');

    const isHomePage = computed(() => route.path === '/');
    const isPastScrollYThreshold = computed(
        () => windowScroll.value.y >= PROFILE_PIC_SCROLLY_THRESHOLD
    );

    function animateSelfIn() {
        createWAAPITimeline([
            {
                opacity: [0, 1],
                duration: 500,
                targets: headerEl.value!,
            },
            {
                width: ['0%', '100%'],
                duration: 500,
                targets: headerBottomEl.value!,
                delay: 100,
            },
            {
                scaleY: [1, 3, 1],
                duration: 400,
                targets: headerBottomEl.value!,
                delay: 800,
            },
            {
                opacity: [1, 0],
                duration: 500,
                targets: headerBottomEl.value!,
                delay: 1200,
            },
        ]);
    }

    onMounted(animateSelfIn);
</script>

<template>
    <header
        ref="header"
        class="bg-dull/75 shadow-dull sticky top-0 z-30 mb-13 flex h-18 w-full items-center p-6 px-14 opacity-0 shadow-lg"
    >
        <div
            style="filter: blur(3px)"
            class="flex h-full w-full overflow-hidden absolute *:w-[200px] *:h-[45px] *:rotate-[-45deg] *:absolute *:top-0 *:opacity-100 transition-opacity duration-100"
            :class="isPastScrollYThreshold ? 'opacity-100' : 'opacity-0'"
        >
            <div class="bg-gradient-to-r from-white/40 to-white mr-20 !opacity-5"></div>
            <div class="bg-gradient-to-r from-white/40 to-dull mr-70 !h-[20px]"></div>
            <div class="bg-gradient-to-r from-white/40 to-gray mr-40 !h-[90px] !w-[250px]"></div>
        </div>

        <img
            src="~/assets/images/petus.png"
            alt="Iapetus11's Profile Picture"
            class="border-glow glow-purple h-8 !rounded-full opacity-0 transition-opacity duration-400"
            :class="{ '!opacity-100': isPastScrollYThreshold || !isHomePage }"
        />

        <h1 v-if="$route.meta.title" class="ml-8">
            {{ $route.meta.title }}
        </h1>

        <nav class="ml-auto flex gap-2">brh {{  windowScroll }} -> {{ isPastScrollYThreshold}}</nav>

        <div ref="header-line" class="bg-glow glow-purple absolute top-0 left-0 h-[1px]"></div>
    </header>
</template>

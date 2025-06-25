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
        <img
            src="~/assets/images/petus.png"
            alt="Iapetus11's Profile Picture"
            class="border-glow glow-purple h-8 !rounded-full opacity-0 transition-opacity duration-400"
            :class="{ '!opacity-100': isPastScrollYThreshold || !isHomePage }"
        />

        <h1 v-if="$route.meta.title" class="ml-8">
            {{ $route.meta.title }}
        </h1>

        <nav class="ml-auto flex gap-2">brh</nav>

        <div ref="header-line" class="bg-glow glow-purple absolute top-0 left-0 h-[1px]"></div>
    </header>
</template>

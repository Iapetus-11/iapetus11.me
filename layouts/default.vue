<script setup lang="ts">
    const headerEl = useTemplateRef('header');
    const headerBottomEl = useTemplateRef('header-bottom');

    function animateHeader() {
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
                ease: 'inQuad',
                delay: 100,
            },
            {
                scaleY: [1, 3, 1],
                duration: 400,
                targets: headerBottomEl.value!,
                ease: 'inQuad',
                delay: 800,
            },
            {
                opacity: [1, 0],
                duration: 500,
                targets: headerBottomEl.value!,
                ease: 'inQuad',
                delay: 1200,
            },
        ]);
    }

    onMounted(() => {
        animateHeader();
    });
</script>

<template>
    <div class="flex min-h-screen flex-col items-center">
        <header
            ref="header"
            class="bg-dull shadow-lg shadow-dull sticky top-0 z-30 mb-13 flex h-18 w-full items-center p-6 opacity-0 shadow-lg"
        >
            <h1 v-if="$route.meta.title">{{ $route.meta.title }}</h1>

            <nav class="ml-auto flex gap-2"><NavigationPages /></nav>

            <div
                ref="header-bottom"
                class="bg-glow glow-purple absolute bottom-0 left-0 h-[1px]"
            ></div>
        </header>

        <main
            class="flex max-w-[90rem] grow items-center px-4 pb-8 md:px-8 lg:px-24 lg:pb-8 xl:pb-12"
        >
            <slot />
        </main>
    </div>
</template>

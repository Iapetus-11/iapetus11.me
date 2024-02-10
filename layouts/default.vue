<script setup lang="ts">
    const route = useRoute();

    const title = computed<string>(() => (route.meta.title as string | undefined) ?? 'Milo Weinberg');

    useHead({
        title: title.value,
    });
</script>

<template>
    <div
        class="min-w-screen mx-auto mb-6 mt-2 min-h-screen max-w-[90vw] md:mb-14 md:mt-10 lg:max-w-[80vw] xl:max-w-[70vw]"
    >
        <div class="my-6 flex items-center justify-between max-md:flex-col-reverse md:my-10">
            <h1 :key="title" class="animate-fade-in text-6xl font-semibold text-white max-md:mt-3">
                {{ title }}
            </h1>

            <NavigationCombined />
        </div>

        <main class="w-full">
            <slot />
        </main>
    </div>
</template>

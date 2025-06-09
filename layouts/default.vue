<script setup lang="ts">
    const route = useRoute();

    const title = computed<string>(
        () => (route.meta.title as string | undefined) ?? 'Milo Weinberg'
    );

    useHead({
        title: title,
    });
</script>

<template>
    <div
        class="mx-auto mt-2 mb-6 min-h-screen max-w-[90vw] min-w-screen md:mt-10 md:mb-14 lg:max-w-[80vw] xl:max-w-[70vw]"
    >
        <div
            class="my-6 flex min-h-[60px] items-center justify-between max-md:flex-col-reverse md:my-10"
        >
            <h1
                :key="title"
                class="animate-fade-in text-6xl font-semibold text-white max-md:mt-3"
                :class="route.meta.titleClasses || ''"
            >
                {{ title }}
            </h1>

            <NavigationCombined />
        </div>

        <main class="w-full">
            <slot />
        </main>
    </div>
</template>

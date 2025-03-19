<script setup lang="ts">
    import { onMounted } from 'vue';

    const pagesAnimationDelay = ref(75 * 3);

    onMounted(() =>
        setTimeout(() => {
            pagesAnimationDelay.value = 0;
        }, 1000)
    );
</script>

<template>
    <nav class="flex items-center space-x-7">
        <div class="flex space-x-3.5">
            <NavigationSmallItems />
        </div>

        <div class="flex space-x-4">
            <NavigationPages :animation-delay="pagesAnimationDelay" />
        </div>
    </nav>
</template>

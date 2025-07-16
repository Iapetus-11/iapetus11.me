<style scoped>
    @reference '@/assets/main.css';

    select {
        @apply outlined-actionable size-full appearance-none rounded-lg px-2 py-1.5 outline-0;
    }
</style>

<template>
    <div class="relative">
        <select>
            <slot />
        </select>

        <span
            class="icon-[hugeicons--arrow-down-01] absolute top-1/2 right-2 -translate-y-1/2 text-lg"
        ></span>
    </div>
</template>

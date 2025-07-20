<script setup lang="ts">
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
</script>

<style scoped>
    @reference '@/assets/main.css';

    img {
        @apply rounded-xl object-scale-down shadow-lg;
    }

    .container {
        @apply flex gap-4;
    }
</style>

<template>
    <DefaultLayout>
        <div class="mb-4 flex">
            <RouterLink
                :to="{ name: 'home' }"
                class="group outlined-actionable mb-auto flex h-fit w-fit items-center rounded-xl p-2 whitespace-nowrap md:p-3"
            >
                <span
                    class="icon-[hugeicons--arrow-left-01] mr-0.5 -ml-1.5 text-2xl transition-[margin] group-hover:mr-1"
                ></span>
                Go Back
            </RouterLink>
        </div>

        <div class="grid grid-cols-3 gap-4">
            <img
                src="@/assets/images/miata/elk-mountain-graffiti-rd-angled.jpg"
                class="col-span-2 row-span-2"
            />
            <img src="@/assets/images/miata/elk-mountain-graffiti-rd-rear.png" />
            <img src="@/assets/images//miata/parking-lot-sunset.jpg" />
            <img
                src="@/assets/images//miata/cliff-view-w-trinity.jpg"
                class="col-span-2 col-start-2 row-span-2 row-start-3"
            />
            <img src="@/assets/images/miata/vg-mountains-rock-angle.png" />
            <img src="@/assets/images//miata/interior-wowie.png" />
        </div>
    </DefaultLayout>
</template>

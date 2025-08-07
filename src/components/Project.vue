<script setup lang="ts">
    import type { ProjectDefinition } from '@/data/projects';
    import Link from '@/components/Link.vue';
    import SkillList from './SkillList.vue';
import { onMounted, ref } from 'vue';

    const props = defineProps<
        ProjectDefinition & {
            imgLoading: 'eager' | 'lazy';
            fadeInIdx: number;
            fadeInMode: 'waitForJs' | 'immediate';
        }
    >();

    const mounted = ref(false);
    const transitionDelay = ref(50 * props.fadeInIdx);
    const transitionDuration = ref(200);
    onMounted(() => {
        mounted.value = true;
        transitionDelay.value = 0;
        setTimeout(() => transitionDuration.value = 0, 200);
    });
</script>

<template>
    <Link
        :to="link"
        :target="link.startsWith('/') ? '_self' : '_blank'"
        class="group outlined-actionable flex shrink items-center space-x-3 rounded-xl p-4 lg:p-5 transition-opacity opacity-[0.001]"
        :class="{ 'opacity-100': fadeInMode === 'immediate' || mounted }"
        :style="{ transitionDelay: `${transitionDelay}ms`, transitionDuration: `${transitionDuration}ms` }"
    >
        <div class="mr-2 flex h-full w-full flex-col md:mr-5 xl:mr-10">
            <div
                class="align-self-end mb-1 flex items-center font-mono text-xl font-semibold whitespace-nowrap text-white md:text-2xl"
            >
                <h3>{{ name }}</h3>

                <span
                    class="icon-[hugeicons--link-square-02] ml-2.5 scale-0 text-purple-300 opacity-0 transition-[opacity,scale] group-hover:scale-110 group-hover:opacity-100"
                ></span>

                <div class="-mt-2 -mr-4 ml-auto size-10 overflow-hidden rounded-full sm:hidden">
                    <img :src="image" :alt="name" />
                </div>
            </div>

            <p class="text-white">
                {{ description }}
            </p>

            <SkillList :skills class="mt-3" />
        </div>

        <div class="ml-auto w-1/3 max-w-[8rem] overflow-hidden rounded-3xl max-sm:hidden">
            <img :src="image" :alt="name" :loading="imgLoading" />
        </div>
    </Link>
</template>

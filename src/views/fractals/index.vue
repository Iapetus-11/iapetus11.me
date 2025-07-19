<script setup lang="ts">
    import { useRoute, useRouter } from 'vue-router';
    import {
        COLORING_STRATEGY_LABELS,
        DEFAULT_FRACTAL,
        EXAMPLES,
        type Fractal,
        FRACTAL_PARSER,
        VARIATIONS,
    } from './fractals';
    import { parseQueryParams } from '@/utils/queryParamsParser';
    import { ref, watch } from 'vue';
    import { useAsyncState, type AsyncState } from '@/utils/asyncState';
    import DefaultLayout from '@/components/layout/DefaultLayout.vue';
    import Select from '@/components/Select.vue';

    const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL;

    const router = useRouter();
    const route = useRoute();

    const fractalConfig = ref<Fractal>(DEFAULT_FRACTAL);

    // Sync fractalConfig to query params
    watch(
        fractalConfig,
        (fc) => {
            const serialized = Object.fromEntries(
                Object.entries(fc).map(([k, v]) => [k, `${v}`])
            ) as Record<string, string>;
            router.replace({ query: { ...route.query, ...serialized } });
        },
        { deep: true }
    );

    // Sync query params to fractalConfig
    watch(
        () => route.query,
        (queryParams) => {
            fractalConfig.value = parseQueryParams(
                queryParams as Record<string, string>,
                FRACTAL_PARSER,
                DEFAULT_FRACTAL
            );
        },
        { deep: true, immediate: true }
    );

    function makeFractalRequest(signal: AbortSignal): Promise<string> {
        const url = new URL(`${API_BASE_URL}/fractals`);

        for (const [pKey, pValue] of Object.entries(fractalConfig.value).filter(([k, v]) => {
            if (v === undefined) {
                return false;
            }

            if (['blur', 'sharpen'].includes(k)) {
                return v !== 0;
            }

            return true;
        })) {
            url.searchParams.set(pKey, pValue!.toString());
        }

        return fetch(url, { method: 'GET', signal })
            .then((res) => res.blob())
            .then((blob) => URL.createObjectURL(blob));
    }

    let abortController: AbortController | null = null;
    const fractal = ref<AsyncState<string>>();
    watch(
        fractalConfig,
        () => {
            abortController?.abort();

            if (fractal.value?.result) {
                URL.revokeObjectURL(fractal.value.result);
            }

            abortController = new AbortController();
            fractal.value = useAsyncState(makeFractalRequest(abortController.signal));
        },
        { immediate: true }
    );

    const showLinkCopiedConfirmation = ref(false);
    function copyLinkToFractal() {
        navigator.clipboard.writeText(window.location.toString());
        showLinkCopiedConfirmation.value = true;
        setTimeout(() => (showLinkCopiedConfirmation.value = false), 1000);
    }

    function resetFractal() {
        fractalConfig.value = { ...DEFAULT_FRACTAL };
    }

    function handleGalleryClick(queryParams: string) {
        router.push({ query: Object.fromEntries(new URLSearchParams(queryParams).entries()) });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
</script>

<style scoped>
    @reference '@/assets/main.css';

    .button {
        @apply outlined-actionable flex items-center justify-center rounded-xl px-2 py-1.5 text-base font-medium;
    }
</style>

<template>
    <DefaultLayout
        class="grid grid-cols-1 justify-between gap-4 text-white lg:-mx-6 lg:grid-cols-2"
    >
        <div class="mb-6 flex justify-between lg:col-span-2">
            <h1 class="font-mono text-5xl font-bold">Fractal Generator</h1>

            <RouterLink
                :to="{ name: 'home' }"
                class="group outlined-actionable my-auto flex h-fit items-center rounded-xl p-3 whitespace-nowrap"
            >
                <span
                    class="icon-[hugeicons--arrow-left-01] mr-0.5 -ml-1.5 text-2xl transition-[margin] group-hover:mr-1"
                ></span>
                Go Back
            </RouterLink>
        </div>

        <!-- Fractal display / loading -->
        <div class="flex aspect-square w-full items-center justify-center lg:order-2">
            <span
                v-if="!fractal || fractal.pending"
                class="icon-[hugeicons--loading-03] text-primary-600 animate-spin text-8xl"
            ></span>

            <img
                v-else-if="fractal?.result"
                :src="fractal.result"
                alt="Fractal"
                class="rounded-2xl"
            />
        </div>

        <!-- Fractal config -->
        <div class="flex w-full flex-col gap-2 text-sm lg:gap-3">
            <div class="mb-1 flex gap-2 lg:gap-3">
                <button
                    type="button"
                    class="button col-span-6 w-full"
                    :class="{ 'bg-primary-700': showLinkCopiedConfirmation }"
                    @click="copyLinkToFractal"
                >
                    <span
                        class="mr-1"
                        :class="
                            showLinkCopiedConfirmation
                                ? 'icon-[hugeicons--checkmark-circle-02]'
                                : 'icon-[hugeicons--copy-01]'
                        "
                    ></span>
                    <span class="self-center">{{
                        showLinkCopiedConfirmation ? 'Copied!' : 'Copy Link'
                    }}</span>
                </button>

                <button type="button" class="button col-span-6 w-full" @click="resetFractal">
                    <span class="icon-[hugeicons--undo] mr-1"></span>
                    <span class="self-center">Reset</span>
                </button>
            </div>

            <div class="grid grid-cols-12 gap-x-2 gap-y-1.5 lg:gap-x-3">
                <label for="fractal-resolution-slider" class="col-span-10 sm:col-span-11">
                    Resolution
                </label>

                <label for="fractal-mirror-input" class="col-span-2 text-center sm:col-span-1">
                    Mirror
                </label>

                <input
                    id="fractal-resolution-slider"
                    v-model.number="fractalConfig.resolution"
                    class="col-span-10 sm:col-span-11"
                    type="range"
                    min="512"
                    max="2048"
                    step="256"
                />

                <input
                    id="fractal-mirror-input"
                    v-model="fractalConfig.mirrored"
                    class="col-span-2 sm:col-span-1"
                    type="checkbox"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-2 gap-y-1.5 lg:gap-x-3">
                <label for="fractal-variation-select">Variation</label>

                <label for="fractal-coloring-select">Coloring Mode</label>

                <Select id="fractal-variation-select" v-model="fractalConfig.variation">
                    <option v-for="variation in VARIATIONS" :key="variation" :value="variation">
                        {{ variation }}
                    </option>
                </Select>

                <Select id="fractal-coloring-select" v-model="fractalConfig.coloring">
                    <option
                        v-for="[name, coloringStrategy] in COLORING_STRATEGY_LABELS"
                        :key="coloringStrategy"
                        :value="coloringStrategy"
                    >
                        {{ name }}
                    </option>
                </Select>
            </div>

            <div class="grid grid-cols-2 gap-x-2 gap-y-1.5 lg:gap-x-3">
                <label for="fractal-color-a-input">Primary Color</label>

                <label for="fractal-color-b-input">Secondary Color</label>

                <input
                    id="fractal-color-a-input"
                    v-model="fractalConfig.colorA"
                    class="w-full"
                    type="color"
                />

                <input
                    id="fractal-color-b-input"
                    v-model="fractalConfig.colorB"
                    class="w-full"
                    type="color"
                />
            </div>

            <div class="flex flex-col gap-y-1.5">
                <label for="fractal-iter-transform-x-input">Iterative X Transform</label>
                <input
                    id="fractal-iter-transform-x-input"
                    v-model.number="fractalConfig.iterTransformX"
                    type="range"
                    min="0"
                    max="1"
                    step="0.03125"
                />
            </div>

            <div class="flex flex-col gap-y-1.5">
                <label for="fractal-iter-transform-y-input">Iterative Y Transform</label>
                <input
                    id="fractal-iter-transform-y-input"
                    v-model.number="fractalConfig.iterTransformY"
                    type="range"
                    min="0"
                    max="1"
                    step="0.03125"
                />
            </div>

            <div class="flex flex-col gap-y-1.5">
                <label for="fractal-iter-transform-input">Transform</label>
                <input
                    id="fractal-iter-transform-input"
                    v-model.number="fractalConfig.transform"
                    type="range"
                    min="0"
                    max="1"
                    step="0.03125"
                />
            </div>

            <div class="flex flex-col gap-y-1.5">
                <label for="fractal-x-shift-input">X Axis Shift</label>
                <input
                    id="fractal-x-shift-input"
                    v-model="fractalConfig.xShift"
                    type="range"
                    min="-1"
                    max="1"
                    step="0.0625"
                />
            </div>

            <div class="flex flex-col gap-y-1.5">
                <label for="fractal-iterations-input">Iterations</label>
                <input
                    id="fractal-iterations-input"
                    v-model.number="fractalConfig.iterations"
                    type="range"
                    min="100"
                    max="5000000"
                    step="100"
                />
            </div>

            <div class="grid grid-cols-2 gap-x-2 gap-y-1.5 lg:gap-x-3">
                <label for="fractal-blur-input">Blur</label>

                <label for="fractal-sharpen-input">Sharpen</label>

                <input
                    id="fractal-blur-input"
                    v-model.number="fractalConfig.blur"
                    type="range"
                    min="0"
                    max="4"
                />

                <input
                    id="fractal-sharpen-input"
                    v-model.number="fractalConfig.sharpen"
                    type="range"
                    min="0"
                    max="4"
                />
            </div>

            <p class="mt-3 text-sm">
                The
                <a
                    href="https://github.com/cuhackit-2022-patrickmakaylamichaelmilo/fractals/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    original code
                </a>
                behind these fractals was based off
                <a
                    href="https://flam3.com/flame_draves.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    this paper
                </a>
                and conceived at
                <a href="https://cuhack.it/" target="_blank" rel="noreferrer" class="text-link"
                    >CUHackit 2022</a
                >
                by me and my team:
                <a
                    href="https://www.linkedin.com/in/michaelbyrd1/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    Michael Byrd</a
                >,
                <a
                    href="https://makayla-moster.github.io/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    Makayla Moster</a
                >, and
                <a
                    href="https://patricksmathers.com/"
                    target="_blank"
                    rel="noreferrer"
                    class="text-link"
                >
                    Patrick Smathers</a
                >. Without them, this page would not be possible.
            </p>
            <p class="text-sm">
                Fractal images generated are licensed under a
                <a
                    rel="license"
                    target="_blank"
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    class="text-link"
                >
                    Creative Commons Attribution-ShareAlike 4.0 International License</a
                >.
            </p>
        </div>

        <div class="order-3 mt-4 lg:col-span-2">
            <h2 class="font-mono text-4xl font-bold">Gallery</h2>
            <p class="mt-1 ml-1 text-sm italic">
                Clicking any of these images will load their parameters in above.
            </p>

            <div class="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-3">
                <button
                    v-for="example in EXAMPLES"
                    :key="example"
                    type="button"
                    @click="handleGalleryClick(example)"
                >
                    <img
                        :src="`${API_BASE_URL}/fractals/?${example}`"
                        alt="fractal example"
                        class="rounded-xl shadow-xl"
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    </DefaultLayout>
</template>

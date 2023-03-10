<script lang="ts">
    import { PUBLIC_API_URL } from '$env/static/public';
    import Fa from 'svelte-fa/src/fa.svelte';
    import {
        faCheckCircle,
        faCircleNotch,
        faClipboard,
        faHouse,
    } from '@fortawesome/free-solid-svg-icons';
    import DesignatedPage from '$lib/components/DesignatedPage.svelte';
    import {
        DEFAULT_FRACTAL,
        COLORING_STRATEGY_LABELS,
        EXAMPLES,
        VARIATIONS,
        getFractal,
    } from '$lib/api/api.iapetus11.me/fractals';
    import type { Fractal } from '$lib/api/api.iapetus11.me/fractals';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    const BUTTON_CLASSES =
        'flex fin py-2 px-2 sm:px-4 hover:bg-aqua-dark transform duration-100 border hover:border-opacity-0 ' +
        'border-white rounded-md h-8 sm:h-10 justify-center text-white w-full';

    let fractalUrl: string;
    let abortController: AbortController | null = null;
    let loading = true;
    let delayedLoadingTimeout = null;

    let fractal = Object.fromEntries(
        Object.entries(DEFAULT_FRACTAL).map(([k, v]) => [k, $page.url.searchParams.get(k) || v])
    ) as Fractal;

    async function updateQueryParams() {
        const url = new URL($page.url);

        Object.entries(fractal).forEach(([k, v]) => {
            if (v === undefined) url.searchParams.delete(k);
            else url.searchParams.set(k, `${v}`);
        });

        await goto(url);
    }

    async function load() {
        delayedLoadingTimeout = setTimeout(() => (loading = true), 200);

        try {
            await updateQueryParams();

            abortController?.abort();
            abortController = new AbortController();

            const fractalBlob = await getFractal(fractal, abortController.signal);

            fractalUrl = URL.createObjectURL(fractalBlob);
        } catch (error) {
            if (error.message === 'The user aborted a request.') return;
            throw error;
        } finally {
            clearTimeout(delayedLoadingTimeout);
            loading = false;
        }
    }

    let linkCopying = false;

    onMount(load);
</script>

<DesignatedPage title="Fractals">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        {#if !fractalUrl || loading}
            <div class="lg:order-2 flex self-center h-[93.5vw] lg:h-auto">
                <Fa
                    icon={faCircleNotch}
                    class="animate-spin self-center text-8xl text-gray-500 mx-auto"
                />
            </div>
        {:else}
            <img alt="fractal" src={fractalUrl} class="lg:order-2 rounded-lg shadow-xl w-full" />
        {/if}

        <div class="flex flex-col w-full gap-1.5 lg:gap-2 text-sm">
            <div class="flex gap-1.5 lg:gap-2">
                <button
                    type="button"
                    class={BUTTON_CLASSES}
                    class:bg-aqua-dark={linkCopying}
                    on:click={() => {
                        navigator.clipboard.writeText($page.url.toString());
                        linkCopying = true;
                        setTimeout(() => (linkCopying = false), 1000);
                    }}
                >
                    <Fa
                        icon={linkCopying ? faCheckCircle : faClipboard}
                        fw
                        class="self-center mr-1"
                    />
                    <span class="self-center">{linkCopying ? 'Copied!' : 'Copy Link'}</span>
                </button>

                <button
                    type="button"
                    class={BUTTON_CLASSES}
                    on:click={() => {
                        fractal = { ...DEFAULT_FRACTAL };
                        load();
                    }}
                >
                    <Fa icon={faHouse} fw class="self-center mr-1" />
                    <span class="self-center">Reset</span>
                </button>
            </div>

            <div class="grid grid-cols-12 gap-1.5 lg:gap-2">
                <label for="fractal-resolution-slider" class="col-span-10 sm:col-span-11">
                    Resolution
                </label>

                <label for="fractal-mirror-input" class="col-span-2 sm:col-span-1 text-center">
                    Mirror
                </label>

                <input
                    bind:value={fractal.resolution}
                    on:change={load}
                    class="col-span-10 sm:col-span-11"
                    id="fractal-resolution-slider"
                    type="range"
                    min={512}
                    max={2048}
                    step={256}
                />

                <input
                    bind:checked={fractal.mirrored}
                    on:change={load}
                    class="col-span-2 sm:col-span-1"
                    id="fractal-mirror-input"
                    type="checkbox"
                />
            </div>

            <div class="grid grid-cols-2 gap-1.5 lg:gap-2">
                <label for="fractal-variation-select">Variation</label>

                <label for="fractal-coloring-select">Coloring Mode</label>

                <select
                    bind:value={fractal.variation}
                    on:change={load}
                    id="fractal-variation-select"
                    class="text-black"
                >
                    {#each VARIATIONS as variation}
                        <option value={variation}>{variation}</option>
                    {/each}
                </select>

                <select
                    bind:value={fractal.coloring}
                    on:change={load}
                    id="fractal-coloring-select"
                    class="text-black"
                >
                    {#each COLORING_STRATEGY_LABELS as [name, coloringStrategy]}
                        <option value={coloringStrategy}>{name}</option>
                    {/each}
                </select>
            </div>

            <div class="grid grid-cols-2 gap-1.5 lg:gap-2">
                <label for="fractal-color-a-input">Primary Color</label>

                <label for="fractal-color-b-input">Secondary Color</label>

                <input
                    bind:value={fractal.colorA}
                    on:change={load}
                    class="w-full"
                    id="fractal-color-a-input"
                    type="color"
                />

                <input
                    bind:value={fractal.colorB}
                    on:change={load}
                    class="w-full"
                    id="fractal-color-b-input"
                    type="color"
                />
            </div>

            <label for="fractal-iter-transform-x-input">Iterative X Transform</label>
            <input
                bind:value={fractal.iterTransformX}
                on:change={load}
                id="fractal-iter-transform-x-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-iter-transform-y-input">Iterative Y Transform</label>
            <input
                bind:value={fractal.iterTransformY}
                on:change={load}
                id="fractal-iter-transform-y-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-iter-transform-input">Transform</label>
            <input
                bind:value={fractal.transform}
                on:change={load}
                id="fractal-iter-transform-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-x-shift-input">X Axis Shift</label>
            <input
                bind:value={fractal.xShift}
                on:change={load}
                id="fractal-x-shift-input"
                type="range"
                min={-1}
                max={1}
                step={0.0625}
            />

            <label for="fractal-iterations-input">Iterations</label>
            <input
                bind:value={fractal.iterations}
                on:change={load}
                id="fractal-iterations-input"
                type="range"
                min={100}
                max={50_00_000}
                step={100}
            />

            <div class="grid grid-cols-2 gap-1.5 lg:gap-2">
                <label for="fractal-blur-input">Blur</label>

                <label for="fractal-sharpen-input">Sharpen</label>

                <input
                    id="fractal-blur-input"
                    type="range"
                    value={fractal.blur || 0}
                    min={0}
                    max={4}
                    on:change={(event) => {
                        fractal.blur = parseInt(event.target.value) || undefined;
                        load();
                    }}
                />

                <input
                    id="fractal-sharpen-input"
                    type="range"
                    value={fractal.sharpen || 0}
                    min={0}
                    max={4}
                    on:change={(event) => {
                        fractal.sharpen = parseInt(event.target.value) || undefined;
                        load();
                    }}
                />
            </div>

            <p class="mt-3 text-sm">
                The
                <a
                    href="https://github.com/cuhackit-2022-patrickmakaylamichaelmilo/fractals/"
                    target="_blank"
                    rel="noreferrer"
                >
                    original code
                </a>
                behind these fractals was based off
                <a href="https://flam3.com/flame_draves.pdf" target="_blank" rel="noreferrer">
                    this paper
                </a>
                and conceived at
                <a href="https://cuhack.it/" target="_blank" rel="noreferrer">CUHackit 2022</a>
                by my team:
                <a
                    href="https://www.linkedin.com/in/michaelbyrd1/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Michael Byrd</a
                >,
                <a href="https://makayla-moster.github.io/" target="_blank" rel="noreferrer">
                    Makayla Moster</a
                >, and
                <a href="https://patricksmathers.com/" target="_blank" rel="noreferrer">
                    Patrick Smathers</a
                >. Without them, this page would not be possible.
            </p>
        </div>

        <div class="order-3 mt-4 lg:col-span-2">
            <h2 class="text-5xl">Gallery</h2>
            <p class="text-sm italic mt-1 ml-1">
                Clicking any of these images will load their parameters in above.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 lg:gap-2 mt-4">
                {#each EXAMPLES as example}
                    <button
                        on:click={() => {
                            fractal = Object.fromEntries(new URLSearchParams(example).entries());
                            load();
                        }}
                    >
                        <img
                            src={`${PUBLIC_API_URL}/fractals/?${example}`}
                            alt="fractal example"
                            class="rounded-lg shadow-xl"
                        />
                    </button>
                {/each}
            </div>
        </div>
    </div>
</DesignatedPage>

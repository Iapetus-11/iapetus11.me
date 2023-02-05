<script lang="ts">
    import { PUBLIC_API_URL } from '$env/static/public';
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import Fa from 'svelte-fa';
    import { faCheckCircle, faClipboard, faHouse } from '@fortawesome/free-solid-svg-icons';
    import DesignatedPage from '$lib/components/DesignatedPage.svelte';

    interface Fractal {
        resolution: number;
        variation: string;
        colorA: string;
        colorB: string;
        coloring: string;
        iterTransformX: number;
        iterTransformY: number;
        xShift: number;
        transform: number;
        iterations: number;
        mirrored: boolean;
        blur: null | number;
        sharpen: null | number;
    }

    const BUTTON_CLASSES =
        'flex fin py-2 px-2 sm:px-4 hover:bg-aqua-dark transform duration-100 border hover:border-opacity-0 ' +
        'border-white rounded-md h-8 sm:h-10 justify-center text-white w-full';

    const EXAMPLES = [
        'resolution=2048&variation=Spherical&colorA=%234466ee&colorB=%2300ff00&coloring=Experimental&iterTransformX=0.625&iterTransformY=0.4375&transform=0.4375&iterations=642300&mirrored=true&xShift=-0.3125&blur=1',
        'resolution=2048&variation=Spherical&colorA=%237300ff&colorB=%2300ff6e&coloring=Experimental&iterTransformX=0.125&iterTransformY=1&transform=0.3125&iterations=841300&mirrored=true&xShift=-0.1875&blur=1',
        'resolution=2048&variation=Tangent&colorA=%235252ff&colorB=%23ff0000&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.4375&transform=0.5625&iterations=766400&mirrored=true',
        'resolution=1792&variation=Tangent&colorA=%23ff0000&colorB=%23d6d9ff&coloring=Experimental&iterTransformX=0.96875&iterTransformY=0.8125&xShift=0.0625&transform=0.5625&iterations=1144900&mirrored=true&blur=3&sharpen=4',
        'resolution=2048&variation=Tangent&colorA=%23007bff&colorB=%238cff00&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.0625&transform=0.875&iterations=741000&mirrored=true&xShift=-0.3125&blur=1',
        'resolution=2048&variation=Tangent&colorA=%23ff0000&colorB=%238cff00&coloring=Experimental&iterTransformX=0.75&iterTransformY=0.0625&transform=1&iterations=766400&mirrored=true&blur=1&sharpen=1',
        'resolution=1792&variation=RadTan&colorA=%230000FF&colorB=%23FF0000&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.5&transform=0.75&iterations=2982800&mirrored=true&xShift=0',
        'resolution=2048&variation=Bubble&colorA=%237300ff&colorB=%2300ff6e&coloring=Experimental&iterTransformX=0.78125&iterTransformY=0.59375&transform=0.90625&iterations=841300&mirrored=true&xShift=0&blur=1',
        'resolution=1024&variation=Diamond&colorA=%23002aff&colorB=%2300ff11&coloring=Experimental&iterTransformX=0.59375&iterTransformY=0.28125&xShift=0&transform=0.90625&iterations=189800&mirrored=true&sharpen=1&blur=1',
    ];

    const VARIATIONS = [
        'Spherical',
        'Tangent',
        'Cross',
        'RadTan',
        'Horseshoe',
        'Linear',
        'Sine',
        'Bubble',
        'Tangle',
        'Diamond',
    ];
    const COLORING_STRATEGIES = [
        ['Experimental', 'Experimental'],
        ['Gradient', 'Gradient'],
        ['Sharp Gradient', 'SigmoidGradient'],
    ];

    const DEFAULT_FRACTAL: Fractal = {
        resolution: 1024,
        variation: VARIATIONS[0],
        colorA: '#0000FF',
        colorB: '#FF0000',
        coloring: COLORING_STRATEGIES[0][1],
        iterTransformX: 0.5,
        iterTransformY: 0.5,
        xShift: 0,
        transform: 0.5,
        iterations: 500000,
        mirrored: true,
        blur: null,
        sharpen: null,
    };

    function loadParams(): Fractal {
        return Object.fromEntries(
            Object.entries(DEFAULT_FRACTAL as Object).map(([k, v]) => {
                return [k, $page.url.searchParams.get(k) || v];
            })
        ) as Fractal;
    }

    let fractal = loadParams();

    let linkCopying = false;

    let fractalImageUrl;
    $: fractalImageUrl = `${PUBLIC_API_URL}/fractals/?${$page.url.searchParams}`;

    function updateParams() {
        Object.entries(fractal as Object).forEach(([key, value]) => {
            if (value === null) $page.url.searchParams.delete(key);
            else $page.url.searchParams.set(key, `${value}`);
        });

        goto(`?${$page.url.searchParams.toString()}`);
    }

    onMount(updateParams);
</script>

<DesignatedPage title="Fractals">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        <img alt="fractal" src={fractalImageUrl} class="lg:order-2 rounded-lg shadow-xl w-full" />

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
                        fractal = DEFAULT_FRACTAL;
                        updateParams();
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
                    on:change={updateParams}
                    class="col-span-10 sm:col-span-11"
                    id="fractal-resolution-slider"
                    type="range"
                    min={512}
                    max={2048}
                    step={256}
                />

                <input
                    bind:checked={fractal.mirrored}
                    on:change={updateParams}
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
                    on:change={updateParams}
                    id="fractal-variation-select"
                    class="text-black"
                >
                    {#each VARIATIONS as variation}
                        <option value={variation}>{variation}</option>
                    {/each}
                </select>

                <select
                    bind:value={fractal.coloring}
                    on:change={updateParams}
                    id="fractal-coloring-select"
                    class="text-black"
                >
                    {#each COLORING_STRATEGIES as [name, coloringStrategy]}
                        <option value={coloringStrategy}>{name}</option>
                    {/each}
                </select>
            </div>

            <div class="grid grid-cols-2 gap-1.5 lg:gap-2">
                <label for="fractal-color-a-input">Primary Color</label>

                <label for="fractal-color-b-input">Secondary Color</label>

                <input
                    bind:value={fractal.colorA}
                    on:change={updateParams}
                    class="w-full"
                    id="fractal-color-a-input"
                    type="color"
                />

                <input
                    bind:value={fractal.colorB}
                    on:change={updateParams}
                    class="w-full"
                    id="fractal-color-b-input"
                    type="color"
                />
            </div>

            <label for="fractal-iter-transform-x-input">Iterative X Transform</label>
            <input
                bind:value={fractal.iterTransformX}
                on:change={updateParams}
                id="fractal-iter-transform-x-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-iter-transform-y-input">Iterative Y Transform</label>
            <input
                bind:value={fractal.iterTransformY}
                on:change={updateParams}
                id="fractal-iter-transform-y-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-iter-transform-input">Transform</label>
            <input
                bind:value={fractal.transform}
                on:change={updateParams}
                id="fractal-iter-transform-input"
                type="range"
                min={0}
                max={1}
                step={0.03125}
            />

            <label for="fractal-x-shift-input">X Axis Shift</label>
            <input
                bind:value={fractal.xShift}
                on:change={updateParams}
                id="fractal-x-shift-input"
                type="range"
                min={-1}
                max={1}
                step={0.0625}
            />

            <label for="fractal-iterations-input">Iterations</label>
            <input
                bind:value={fractal.iterations}
                on:change={updateParams}
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
                        fractal.blur = parseInt(event.target.value) || null;
                        updateParams();
                    }}
                />

                <input
                    id="fractal-sharpen-input"
                    type="range"
                    value={fractal.sharpen || 0}
                    min={0}
                    max={4}
                    on:change={(event) => {
                        fractal.sharpen = parseInt(event.target.value) || null;
                        updateParams();
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
                    <a
                        href="?{example}"
                        on:click={() => setTimeout(() => (fractal = loadParams()))}
                    >
                        <img
                            src={`${PUBLIC_API_URL}/fractals/?${example}`}
                            alt="fractal example"
                            class="rounded-lg shadow-xl"
                        />
                    </a>
                {/each}
            </div>
        </div>
    </div>
</DesignatedPage>

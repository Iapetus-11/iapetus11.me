<script lang="ts">
    export let name: string;
    export let description: string;
    export let image: string;
    export let href: string;
    export let idx: number;
    export let pixelated = false;
</script>

<a
    class="grid grid-cols-1 md:grid-cols-3 space-x-3 md:space-x-6 justify-between fin p-3 md:p-6 bg-dark-super
           hover:bg-opacity-80 transition rounded-xl {$$props.class}"
    style="animation-delay:{0.2 + idx * 0.05}s;"
    {href}
    target={href.startsWith('/') ? '_self' : '_blank'}
>
    <div class="hidden md:flex items-center">
        <img
            src={image}
            alt={name}
            class="rounded-full shadow w-full {pixelated ? 'rescale-linear' : ''}"
        />
    </div>

    <span class="md:col-span-2 my-auto">
        <img
            src={image}
            alt={name}
            class="md:hidden flex rounded-full shadow w-1/6 float-left mr-3 mt-1
                   {pixelated ? 'rescale-linear' : ''}"
        />
        <span class="text-aqua-normal text-3xl font-semibold">{name}</span>
        <br />
        <span class="text-white">{description}</span>
    </span>
</a>
